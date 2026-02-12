import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginData } from '../interfaces/user-interface'

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  url =environment.apiUrl;

  constructor( private http: HttpClient){}

  login( loginObj : loginData){
    this.http.post(`${this.url}/user/login`, DataTransfer,{
      headers: new HttpHeaders().set('content-type', "application/json")
    })
  }
}
