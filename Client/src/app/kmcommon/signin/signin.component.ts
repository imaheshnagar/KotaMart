import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMessages } from '../Validations/ErrorMessages';
import { AppUser } from '../_models/appuser';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'mg-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, public errhelper: ErrorMessages,
    private userSer:UserService) { }

  ngOnInit(): void {

  }

  fgSignIn = new FormGroup(
    {
      uname: new FormControl('', [Validators.required]),
      psw: new FormControl('',
        [
          Validators.required,
         // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]
      ),
      remember: new FormControl()
    }
  )

  login() {
    const signInData :AppUser = new AppUser(this.fgSignIn.controls.uname.value ,"",this.fgSignIn.controls.psw.value);
   
    this.userSer.signIn(signInData).subscribe({
      next:(res)=>{
        console.debug("loggedIn");

      },
      error:(err)=>{
        console.debug(err)
      },
      complete:()=>{
        console.log("sign in provcess done")
      }

    })

  }
  Cancel() {
    this.router.navigateByUrl('/home');
  }

  ForgetPassword() {
    this.router.navigateByUrl('/forgetpassword');
  }





}



