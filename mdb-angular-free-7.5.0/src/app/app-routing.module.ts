import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesPageComponent } from './pages/consumer/services-page/services-page.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { HomeProviderComponent } from './pages/provider/home-provider/home-provider.component';
import { CreateServicesOrUpdateComponent } from './components/create-services-or-update/create-services-or-update.component';

const routes: Routes = [
  { path: 'home/services/:category', component: ServicesPageComponent },
 { path: 'login', component: LoginComponent },
  { path: 'register/:typeOfUser', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home/user/profile/:typeOfUser', component: UserProfileComponent },
  { path: 'home/user/provider', component: HomeProviderComponent },
  { path: 'service/createOrUpdate', component: CreateServicesOrUpdateComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
