import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMessages } from '../Validations/ErrorMessages';
import { AppUser } from '../_models/appuser';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'mg-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  constructor(public errhelper:ErrorMessages,private userSer:UserService,
    private router:Router  ) { }

  ngOnInit(): void {
  }

  fgSignUp = new FormGroup(
    { 
      fname:new FormControl('',[Validators.required,this.testNotAllowed]),
      lname:new FormControl('',[Validators.required]),
      address:new FormGroup(
        {
           line1:new FormControl('',[Validators.required]),
           line2:new FormControl('',[Validators.required]),
           country:new FormControl('',[Validators.required]),
           state:new FormControl('',[Validators.required]),
           city:new FormControl('',[Validators.required]),
        }
      ),
      mobile:new FormControl('',[Validators.required,Validators.pattern('^ [0 - 9]{10}$')]),
      email:new FormControl('',[Validators.required,Validators.email]),
      psw:new FormControl('',[Validators.required]),
      cnfpsw:new FormControl('',[Validators.required]),
      acceptTerms:new FormControl(false)
    },
    [this.PasswordMatch]
  )

  signup()
  {
    const signUpData :AppUser = new AppUser(this.fgSignUp.controls.fname.value ,this.fgSignUp.controls.email.value,this.fgSignUp.controls.psw.value);
    let signupsucess =false;
    debugger;
    this.userSer.signup(signUpData).subscribe(
      {
        next:(result)=> {
           console.log(result)
            signupsucess = true;
          },
        error:(err) => {console.log(err)},
        complete:()=> {
          console.log("I am done and can move to sign In ")
          if(signupsucess){
            this.router.navigateByUrl('/signin');
          }
        }
      }
    )
  
  
}

  testNotAllowed():ValidatorFn
  {
    return ():ValidationErrors|null=>
    {
      const name = this.fgSignUp.get('fname');
      return name?.value =="test" ? null :{notAllowed:{value:true}};
    }
  }

  PasswordMatch(fgSignUp:any):ValidatorFn|{[key:string]:any}|null
  {
    if(fgSignUp)
    {
        const psw = fgSignUp.get('psw');
        const cnfpsw= fgSignUp.get('cnfpsw');
        if(psw?.value && cnfpsw?.value && psw.value == cnfpsw.value)
        {
          return null ;
        }
        else
        {
          return {'passwordNotMatch':true};
        }
      }
      return null;
  }



}
