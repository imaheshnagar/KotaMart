import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { kmFormControl } from '../helpers/kmformcontrol';

@Component({
  selector: 'mg-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  fg = new FormGroup(
    { 
      uname:new FormControl('',[Validators.required]),
      psw:new FormControl('',
      [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
       ]
      ),
      remember:new FormControl()
    }
  )



  getError(cntrl:string):string
  {
    const fgcontrol = this.fg.get(cntrl);

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

  login()
  {
    console.log(this.fg);
  }
  Cancel()
  {
   this.router.navigateByUrl('/home');
  }


}
