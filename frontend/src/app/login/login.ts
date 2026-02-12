import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { InputFormField } from '../reusable/input-form-field/input-form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-login',
  imports: [ MatCardModule, InputFormField, ReactiveFormsModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginForm!: FormGroup

 constructor( private fb: FormBuilder){

 }
 ngOnInit():void{
  this.initForm();
 }

 initForm(){
  this.loginForm = this.fb.group({
    userName: [null, Validators.required],
    password:['',Validators.required]
  })
  
 }
 onSubmit(){
  console.log(this.loginForm.value);
 }
}
