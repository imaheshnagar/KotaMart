import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AppUser } from '../_models/appuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:AppUser = { username:"",password:"",email:"" } ;
  constructor(private httpreq:HttpClient) { }

  $userRole :Subject<string> = new Subject<string>();
  $isLoogedIn :Subject<boolean>= new Subject<boolean>();

  getUser()
  {
    let userData = sessionStorage.getItem("userdata");
    if(userData)
    {
      console.table(JSON.parse(userData));
      console.log('token', this.getToken());
    }
  }

  signup(appUser:AppUser)
  {
    return this.httpreq.post(environment.appServerUrl + 'api/auth/signup',appUser);
  }

  emitIsLoggedIn(islogged:boolean)
  {
    this.$isLoogedIn.next(islogged);
  }

  emitUserRole(role:string)
  {
    this.$userRole.next(role);
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
