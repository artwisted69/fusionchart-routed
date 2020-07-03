import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations : fuseAnimations
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
