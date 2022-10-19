import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

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
      fname:new FormControl('',[Validators.required]),
      lname:new FormControl('',[Validators.required]),
      address:new FormGroup(
        {
           line1:new FormControl('',[Validators.required]),
           line2:new FormControl('',[Validators.required]),
           city:new FormControl('',[Validators.required]),
        }
      ),
      mobile:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      psw:new FormControl('',[Validators.required]),
      cnfpsw:new FormControl('',[Validators.required]),
      acceptTerms:new FormControl(false)
    }
  )

  signup()
  {
    console.log(this.fg);
  }

}
