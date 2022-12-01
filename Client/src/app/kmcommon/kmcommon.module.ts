import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from '../home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ErrorMessages } from './Validations/ErrorMessages';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwttokenInterceptor } from './_interceptors/jwttoken.interceptor';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { globalErrorHandler } from './globalErrorHandler';
import { HttperrorInterceptor } from './_interceptors/httperror.interceptor';


@NgModule({
  declarations: [
    SigninComponent,
    Notfound404Component,
    SignupComponent,
    HomeComponent,
    ForgetpasswordComponent,
    NotauthorizedComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
    
    
  ],
  providers:[ErrorMessages,
    {provide:HTTP_INTERCEPTORS,useClass:JwttokenInterceptor,multi:true },
    {provide:HTTP_INTERCEPTORS,useClass:HttperrorInterceptor,multi:true},
    {provide:ErrorHandler,useClass:globalErrorHandler}
    
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    
    

  ]
})
export class KmcommonModule { }
