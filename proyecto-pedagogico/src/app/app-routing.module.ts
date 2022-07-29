import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import {BoardUserComponent} from './components/board-user-component/board-user-component';
import {BoardFacilityComponent} from './components/board-facility-component/board-facility-component';
import {BoardAdminComponent} from './components/board-admin-component/board-admin-component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  { path: 'mod', component: BoardFacilityComponent},
  { path: 'admin', component: BoardAdminComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
