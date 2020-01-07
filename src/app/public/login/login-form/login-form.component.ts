import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'al-login-form',
  templateUrl: './login-form.component.html',
  styles: []
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email': ['', [
        Validators.email,
        Validators.required
      ]],
      'password': ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]]
    })
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  submit() {
    console.info(this.email.value);
    console.info(this.password.value);
  }

}
