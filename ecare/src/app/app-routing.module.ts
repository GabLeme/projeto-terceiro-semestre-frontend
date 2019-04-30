import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeServicesComponent } from './pages/principal/home-services/home-services.component';
import { RegisterServiceComponent } from './pages/provider/register-service/register-service.component';
import { ProviderProfileComponent } from './pages/provider/provider-profile/provider-profile.component';
import { ConsumerProfileComponent } from './pages/consumer/consumer-profile/consumer-profile.component';

const routes: Routes = [
  //Auth
  { path: 'auth/login', component: LoginComponent },
  //{ path: 'auth/register', component: RegisterServiceComponent},
  //Principal
  { path: 'home/services', component: HomeServicesComponent },
  //Providers
  { path: 'provider/register-service', component: RegisterServiceComponent},
  { path: 'provider/profile', component: ProviderProfileComponent},
  //Consumers
  { path: 'consumer/profile', component: ConsumerProfileComponent}  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
