import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { CustomMaterialModule } from './core/material.module';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LoginComponent } from './pages/auth/login/login.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({

  declarations: [

    AppComponent,

    LoginComponent,


  ],

  imports: [

    BrowserModule,

    BrowserAnimationsModule,

    CustomMaterialModule,

    FormsModule,

    AppRoutingModule,
    
    HttpClientModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }