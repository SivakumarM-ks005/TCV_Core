import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { InputFormField } from '../reusable/input-form-field/input-form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { UserServices } from '../services/user-services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ MatCardModule, InputFormField, ReactiveFormsModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginForm:any= FormGroup;
  responseMessage : string='';
  router = inject(Router)

 constructor( 
  private fb: FormBuilder, 
  private http: HttpClient,
  private userService : UserServices
  )
  { }
 ngOnInit():void{
  this.initLoginForm();
 }

 initLoginForm(){
  this.loginForm = this.fb.group({
    userName: [null, Validators.required],
    password:['',Validators.required]
  })
  
 }
 onLogin(){
  var formData = this.loginForm.value,
  data ={
    userName: formData.userName,
    password: formData.password
  }
  this.userService.login(data).subscribe((response:any)=>{
    console.log(response.result);
    if(response.result){
      this.router.navigateByUrl('/dashboard');
      localStorage.setItem("token", response.token);
    }else {
     this.responseMessage  = response.message;
    }
  })
}
}