import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import {SecondComponent} from './second-comp';
import { ThirdCompComponent } from './third-comp/third-comp.component';
  
import { SomeNameComponent } from './myfolder/some-name/some-name.component';
import {FormsModule } from '@angular/forms';
import { DemoComponent } from './demo-comp';
import { Directive1Component } from './directive1-comp';
@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondComponent,
    ThirdCompComponent,
    DemoComponent,
    SomeNameComponent,
    Directive1Component
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [SecondComponent]
})
export class AppModule { }
