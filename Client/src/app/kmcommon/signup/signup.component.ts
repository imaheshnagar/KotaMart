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
      email:new FormControl('',[Validators.required,Validators.email]),
      psw:new FormControl('',[Validators.required]),
      cnfpsw:new FormControl('',[Validators.required]),
      remember:new FormControl(false)
    }
  )

  signup()
  {
    console.log(this.fg);
  }

}
