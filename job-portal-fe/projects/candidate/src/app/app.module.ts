import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared-module';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
