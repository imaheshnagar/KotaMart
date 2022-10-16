import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { kmFormControl } from '../helpers/kmformcontrol';

@Component({
  selector: 'mg-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fg = new FormGroup(
    { 
      uname:new FormControl('',[Validators.required]),
      psw:new FormControl('',[Validators.required]),
      remember:new FormControl(false)
    }
  )

  login()
  {
    console.log(this.fg);
  }


}
