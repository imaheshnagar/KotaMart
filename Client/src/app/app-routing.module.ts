import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ForgetpasswordComponent } from './kmcommon/forgetpassword/forgetpassword.component';
import { Notfound404Component } from './kmcommon/notfound404/notfound404.component';
import { SigninComponent } from './kmcommon/signin/signin.component';
import { SignupComponent } from './kmcommon/signup/signup.component';
import { AdminGuard } from './kmcommon/_guards/admin.guard';
import { BuyerGuard } from './kmcommon/_guards/buyer.guard';
import { SellerGuard } from './kmcommon/_guards/seller.guard';

const routes: Routes = [
  // {path:'',redirectTo:"/home"},
  {path:'home',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'signout',component:HomeComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'buyer',canActivate:[BuyerGuard], loadChildren:()=>import('./buyer/buyer.module').then(m=>m.BuyerModule)},
  {path:'seller',canActivate:[SellerGuard],loadChildren:()=>import('./seller/seller.module').then(m=>m.SellerModule)},
  {path:'admin',canActivate:[AdminGuard],loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'**',component:Notfound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
