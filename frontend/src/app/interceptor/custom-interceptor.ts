import { HttpErrorResponse, HttpHandler, HttpHeaders, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

export const customInterceptor: HttpInterceptorFn = (req, next) => {

  //router = inject(Router)
 // debugger
  const token = localStorage.getItem('token');
  const clonedReq = req.clone({
    setHeaders: {
      Authorization :  `Bearer ${token}`
    }
  })
  return next(clonedReq);

  // cafe method
//intercept(request: HttpRequest<unknown>, next: HttpHandler):Observable<HttpEvent<unknown>>{
  // if(token){
  //   request = request.clone({
  //      setHeaders: {
  //     Authorization :  `Bearer ${token}`
  //   }
  //   })
  // }
  // return next.handle(request).pipe(
//   catchError((err)=>{
//     if(err instanceof HttpErrorResponse){
//       console.log(err.url);
//       if(err.status === 401 || err.status === 403){
//         if(this.router.url=== '/'){}
//         else {
//           localStorage.clear();
//           this.router.navigate(['/']);
//         }
//       }
//     }
//     return throwError
//   })  
// )
  //}
};
