import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KmcommonModule } from './kmcommon/kmcommon.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KmnavheaderComponent } from './kmcommon/kmnavheader/kmnavheader.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    KmnavheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KmcommonModule,
    NgbModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
