import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    SigninComponent,
    Notfound404Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    

  ]
})
export class KmcommonModule { }
