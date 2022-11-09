import { Component, OnInit } from '@angular/core';
import { UserService } from '../kmcommon/_services/user.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'mg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userser:UserService) { }

  ngOnInit(): void {

      this.userser.getUser();

  }

}
