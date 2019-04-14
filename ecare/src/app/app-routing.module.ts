import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeServicesComponent } from './pages/principal/home-services/home-services.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'home/services', component: HomeServicesComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
