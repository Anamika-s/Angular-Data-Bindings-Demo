import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import {SecondComponent} from './second-comp';
import { ThirdCompComponent } from './third-comp/third-comp.component';
  
import { SomeNameComponent } from './myfolder/some-name/some-name.component';
import {FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondComponent,
    ThirdCompComponent,
   
    SomeNameComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
