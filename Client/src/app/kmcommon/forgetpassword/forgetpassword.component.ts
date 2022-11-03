import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'mg-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  constructor() { }

   fg = new FormGroup(
    {
      email: new FormControl('',[Validators.required]) 
    }
  );
  ngOnInit(): void {
  }

  sendEmail()
  {
    console.log(this.fg);
  }

}
