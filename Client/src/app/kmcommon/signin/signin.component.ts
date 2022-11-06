import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMessages } from '../Validations/ErrorMessages';


@Component({
  selector: 'mg-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, public errhelper: ErrorMessages) { }

  ngOnInit(): void {

  }

  fg = new FormGroup(
    {
      uname: new FormControl('', [Validators.required]),
      psw: new FormControl('',
        [
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]
      ),
      remember: new FormControl()
    }
  )

  login() {
    console.log(this.fg);
  }
  Cancel() {
    this.router.navigateByUrl('/home');
  }

  ForgetPassword() {
    this.router.navigateByUrl('/forgetpassword');
  }





}



