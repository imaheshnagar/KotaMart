import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:any ;
  appServerUrl :string ="https://localhost:7211/weatherforecast";

  constructor(private httpreq:HttpClient) { }

  getUser()
  {

    this.httpreq.get(this.appServerUrl).pipe().subscribe( 
    {
      next:(response)=> {console.table(response)},
      error:(error)=> {console.debug(error)},
      complete:()=>{console.debug("done ")}
    } );
  }


}
