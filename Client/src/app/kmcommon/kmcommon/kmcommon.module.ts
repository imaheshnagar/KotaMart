import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from '../sign-in/sign-in.component';
import { Notfound404Component } from '../notfound404/notfound404.component';

@NgModule({
  declarations: [
    SignInComponent,
    Notfound404Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports:[]
})
export class KmcommonModule { }
