import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth-service';
import { Snackbar } from './snackbar';
import { jwtDecode } from 'jwt-decode';
import { globalConstants } from './global-constants';
@Injectable({
  providedIn: 'root',
})
export class RouteGuard {
  
  constructor( private router : Router,
    private authService :AuthService,
    private snackbarService: Snackbar
  ){}

  canActivate(route:ActivatedRouteSnapshot):boolean{
    let expectedRoleArray = route.data;
    expectedRoleArray = expectedRoleArray['expectedRole'];

    const token:any  = localStorage.getItem('token');
    var tokenPayload :any
    try {
        tokenPayload = jwtDecode(token);
    } catch (error) {
        localStorage.clear();
        this.router.navigate(['/']);
    }
    let checkRole = false;

    for (let i =0;  i< expectedRoleArray['length']; i++){
      if(expectedRoleArray[i]== tokenPayload.role){
        checkRole = true
      }
    }
    if(tokenPayload.role == 'admin' || tokenPayload.role == 'user'){
      if(this.authService.isAuthendicated() && checkRole){
        return true;
      }
      this.snackbarService.openSnackbar(globalConstants.unauthorized, globalConstants.errorRegex);
      this.router.navigate(['/dashboard']);
      return false;
    }else {
      this.router.navigate(['/']);
      localStorage.clear();
      return false;
    }
  }
}
