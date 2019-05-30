import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardServicesComponent } from './components/card-services/card-services.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesPageComponent } from './pages/consumer/services-page/services-page.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { loadingspinnercomponent } from './pages/loading-spinner/loading-spinner.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { FilterDivComponent } from './components/filter-div/filter-div.component';
import { UtilitiesDivComponent } from './components/utilities-div/utilities-div.component';
import { NgxCurrencyModule } from "ngx-currency";
import { HomeProviderComponent } from './pages/provider/home-provider/home-provider.component';
import { ViewProposesComponent } from './components/view-proposes/view-proposes.component';
import { CreateServicesOrUpdateComponent } from './components/create-services-or-update/create-services-or-update.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { RatingModule } from 'ng-starrating';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardServicesComponent,
    ServicesPageComponent,
    LoginComponent,
    RegisterComponent,
    loadingspinnercomponent,
    UserProfileComponent,
    FilterDivComponent,
    UtilitiesDivComponent,
    HomeProviderComponent,
    ViewProposesComponent, 
    CreateServicesOrUpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    LoadingBarHttpClientModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
