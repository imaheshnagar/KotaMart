import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mg-kmnavheader',
  templateUrl: './kmnavheader.component.html',
  styleUrls: ['./kmnavheader.component.scss']
})
export class KmnavheaderComponent implements OnInit {

  

  active = 'top';
  constructor() { }

  ngOnInit(): void {
  }

  logout()
  {
    
  }
}
