import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  isLoggedIn :boolean = false;
  userRole:string = "";
  constructor(private userSer :UserService,private router:Router) {
 
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(!this.userSer.IsRoleAllowed('admin'))
      {
         return this.router.createUrlTree(['./notauthorized']);
      }
        return true ; 
   
  }
  
}
