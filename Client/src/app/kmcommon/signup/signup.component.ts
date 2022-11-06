import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorMessages } from '../Validations/ErrorMessages';

@Component({
  selector: 'mg-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public errhelper:ErrorMessages) { }

  ngOnInit(): void {
  }



  fg = new FormGroup(
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
    console.log(this.fg);
  }

  testNotAllowed():ValidatorFn
  {
    return ():ValidationErrors|null=>
    {
      const name = this.fg.get('fname');
      return name?.value =="test" ? null :{notAllowed:{value:true}};
    }
  }

  PasswordMatch(fg:any):ValidatorFn|{[key:string]:any}|null
  {
    if(fg)
    {
        const psw = fg.get('psw');
        const cnfpsw= fg.get('cnfpsw');
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
