import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'mg-kmnavheader',
  templateUrl: './kmnavheader.component.html',
  styleUrls: ['./kmnavheader.component.scss']
})
export class KmnavheaderComponent implements OnInit {
  active = 'top';
  isLoggedIn :boolean = false;
  userRole:string = "";
  ngOnInit(): void {
  }

  constructor(private userSer:UserService,private router:Router) {

    const token = this.userSer.getToken();
    if (token != "" && !!token) {
      this.isLoggedIn = true;
      this.userRole = 'admin';
    }
    else
    {
      userSer.$isLoogedIn.subscribe((loggedin)=>{
        this.isLoggedIn = loggedin;
      });

      userSer.$userRole.subscribe((role)=>{
        this.userRole = role;
      })
  
    }
  

  }

  logout()
  {
    debugger;
    sessionStorage.clear();
    this.userSer.emitIsLoggedIn(false);
    this.userSer.emitUserRole('');
    this.router.navigateByUrl('/signin');
    
  }
}
