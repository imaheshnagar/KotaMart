import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'mg-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

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

  PasswordMatch():ValidatorFn
  {
      return():ValidationErrors|null=>
      {
        const psw = this.fg.get('psw');
        const cnfpsw= this.fg.get('cnfpsw');
        if(psw?.value && cnfpsw?.value && psw.value == cnfpsw.value)
        {
          return null ;
        }
        else
        {
          return {passwordNotMatch:{value:true}};
        }
      };
  }

  kmErrorMessage(cntrl:string,fg:FormGroup):string
  {
      const fgcontrol = fg.get(cntrl);

          if(fgcontrol && fgcontrol.errors !=null && fgcontrol.touched && fgcontrol.invalid )
          {
              if(fgcontrol.errors['required'])
              {
                  return "This field is required";;
              }
              if(fgcontrol.errors['pattern'])
              {
                  return "This field is required pattern";;
              }
          }    
          return ""

  }

}
