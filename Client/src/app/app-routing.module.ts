import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Notfound404Component } from './kmcommon/notfound404/notfound404.component';
import { SigninComponent } from './kmcommon/signin/signin.component';

const routes: Routes = [
  {path:'signIn',component:SigninComponent},
  {path:'signOut',component:AppComponent},
  {path:'buyer',loadChildren:()=>import('./buyer/buyer.module').then(m=>m.BuyerModule)},
  {path:'seller',loadChildren:()=>import('./seller/seller.module').then(m=>m.SellerModule)},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'',component:AppComponent,pathMatch:'full'},
  {path:'**',component:Notfound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
