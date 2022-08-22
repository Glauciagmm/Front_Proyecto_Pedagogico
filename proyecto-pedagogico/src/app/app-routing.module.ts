import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FacilityDetailComponent} from"./components/facility-detail/facility-detail.component";
import { FacilityAddComponent } from "./components/facility-add/facility-add.component";
import { FacilityEditComponent } from "./components/facility-edit/facility-edit.component";
import { CardComponent } from './components/facility-card/card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user-component/board-user-component';
import { BoardFacilityComponent } from './components/board-facility-component/board-facility-component';
import { BoardAdminComponent } from './components/board-admin-component/board-admin-component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  
  {    path: "facility",
    component: CardComponent,  
    data: { title: "Facility List" },
  },
  {
    path: "facility-details",
    component: FacilityDetailComponent,
    data: { title: "Facility Details" },
  },
  {
    path: "facility-add",
    component: FacilityAddComponent,
    data: { title: "Facility Add" },
  },
  {
    path: "facility-edit/:id",
    component: FacilityEditComponent,
    data: { title: "Facility Edit" },
  },
  { path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  { path: 'mod', component: BoardFacilityComponent},
  { path: 'admin', component: BoardAdminComponent},
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{
      paramsInheritanceStrategy: 'always'
    }),
    CommonModule
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }



