import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './reusable-components/header/header.component';
import { NavigationMenuComponent } from './reusable-components/navigation-menu/navigation-menu.component';
import { FooterComponent } from './reusable-components/footer/footer.component';
import { NavigationMenuSecundaryComponent } from './reusable-components/navigation-menu-secundary/navigation-menu-secundary.component';
import { HomeServicesComponent } from './pages/principal/home-services/home-services.component';
import { MaterialModule } from './core/material-module';
import { CardServicesCaregiverComponent } from './reusable-components/card-services-caregiver/card-services-caregiver.component';


@NgModule({

  declarations: [

    AppComponent,

    LoginComponent,

    HeaderComponent,

    NavigationMenuComponent,

    FooterComponent,

    NavigationMenuSecundaryComponent,

    HomeServicesComponent,

    CardServicesCaregiverComponent,


  ],

  imports: [

    BrowserModule,

    BrowserAnimationsModule,

    FormsModule,

    AppRoutingModule,

    MaterialModule,

    HttpClientModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }