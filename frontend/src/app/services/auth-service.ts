import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  router = inject(Router);

  public isAuthendicated(): boolean{
    const token = localStorage.getItem('token');
    if(!token){
      this.router.navigate(['/login']);
      return false;
    }else {
      return true;
    }
  }
}
