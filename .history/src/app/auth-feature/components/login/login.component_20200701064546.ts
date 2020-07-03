import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private router: Router
  ) { }

  ngOnInit(): void {
      this.loginForm = this.fb.group({
         email: new FormControl('', Validators.email),
         password: new FormControl()
      });
  }

  get lfcontrols() { return this.loginForm.controls; }

  login() {
      this.router.navigate(['app/overview']);
  }

}
