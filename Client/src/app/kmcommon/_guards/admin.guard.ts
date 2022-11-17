import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  isLoggedIn :boolean = false;
  userRole:string = "";
  constructor(private userSer :UserService) {
 
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     debugger;
    
    this.userSer.$userRole.subscribe((role)=>{
      this.userRole = role;
    })
      if(this.userRole=="admin"){
        return true;
     }
     return false;
  }
  
}
