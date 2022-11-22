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
      this.setToken(response?.token) ;
    }
  }

  getRoles():any
  {
    const sessionData =  sessionStorage.getItem("userdata") ;

    if(typeof(sessionData) ==="string")
    {
      const res = JSON.parse(sessionData);
      if(res)
      {
        return res.roles;
      }
  }
    return null ;
  }

  IsRoleAllowed(roleLabel:string)
  {
    debugger;
    const roles = this.getRoles();
    if (roleLabel=='admin')
    {
      return true ;
    }
    if(roles)
    {
      return roles.some((r: { Role: string; }) => r.Role === roleLabel);
    }
    return false ;

  }
   

  getToken()
  {
    return sessionStorage.getItem("usertoken");
  }

  setToken(token: any) {
    sessionStorage.setItem("usertoken", token);
  }


}
