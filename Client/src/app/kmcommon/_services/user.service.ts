import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AppUser } from '../_models/appuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:AppUser = { username:"",password:"",email:"" } ;
  constructor(private httpreq:HttpClient) { }

  getUser()
  {
    this.httpreq.get(environment.appServerUrl + 'User').pipe().subscribe( 
    {
      next:(response)=> {console.table(response)},
      error:(error)=> {console.debug(error)},
      complete:()=>{console.debug("done ")}
    } );
  }

  signup(appUser:AppUser)
  {
    return this.httpreq.post(environment.appServerUrl + 'api/auth/signup',appUser)
  }
  
  signIn(appUser:AppUser)
  {
    return this.httpreq.post(environment.appServerUrl + 'api/auth/signin',appUser).pipe(
        map((response)=> {
          this.setUserSession(response);
          return response;
        })     
    );
  }

  setUserSession(response:any)
  {
    if(response)
    {
      sessionStorage.setItem("userdata",JSON.stringify(response));
      sessionStorage.setItem("usertoken",response?.token) ;
    }
  }

  getToken()
  {
    return sessionStorage.getItem("usertoken");
  }

}
