import { Component, OnInit } from '@angular/core';
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

  constructor(private userSer:UserService) {
    userSer.isLoogedIn.subscribe((loggedin)=>{
      this.isLoggedIn = loggedin;
    });

    userSer.userRole.subscribe((role)=>{
      this.userRole = role;
    })
  }

  logout()
  {
    
  }
}
