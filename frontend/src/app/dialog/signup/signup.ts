import { Component } from '@angular/core';
import { MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { InputFormField } from '../../reusable/input-form-field/input-form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { globalConstants } from '../../services/global-constants';

@Component({
  selector: 'app-signup',
  imports: [MatFormFieldModule, MatDialogModule, MatDialogActions, InputFormField, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  signupForm: any = FormGroup;

  constructor(private dialog: MatDialogRef<Signup>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(globalConstants.passwordRegex)]],
      email: ['', [Validators.required, Validators.pattern(globalConstants.emailRegex)]],
      contactNumber: ['', Validators.required],
    });
  }
}
