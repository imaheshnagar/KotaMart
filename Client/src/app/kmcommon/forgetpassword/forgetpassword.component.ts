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
      email: new FormControl('',[Validators.required,Validators.email]) 
    }
  );
  ngOnInit(): void {
  }

  sendEmail()
  {
    console.log(this.fg);
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
              if(fgcontrol.errors['email'])
              {
                  return "This email format is incorrect";;
              }
              if(fgcontrol.errors['pattern'])
              {
                  return "This field is required pattern";;
              }
          }    
          return ""

  }


}
