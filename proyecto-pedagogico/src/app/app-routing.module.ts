import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FacilityDetailComponent} from"./components/facility-detail/facility-detail.component";
import { FacilityAddComponent } from "./components/facility-add/facility-add.component";
import { FacilityEditComponent } from "./components/facility-edit/facility-edit.component";
import { CardComponent } from './components/card/card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user-component/board-user-component';
import { BoardFacilityComponent } from './components/board-facility-component/board-facility-component';
import { BoardAdminComponent } from './components/board-admin-component/board-admin-component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { ChildAComponent } from './child-a.component';
import { ChildBComponent } from './child-b.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  
  {    path: "facility",
    component: CardComponent,  
    data: { title: "Facility List" },
  },
  { path: 'facilityfilter', component: FacilitiesComponent},
   {path: "facility/:categoryId",
  component: FacilitiesComponent,  
  data: { title: "Facility List filter by category" },
},
{    path: "facility/:city",
component: FacilitiesComponent,  
data: { title: "Facility List filter by city" },
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
  { path: 'facility-board', component: BoardFacilityComponent,
  children: [
    {
      path: '',
      redirectTo: 'facilityA',
      pathMatch: 'full'
    },
    {
      path: 'facilityA',
      component: ChildAComponent
    },
    {
      path: 'facilityB',
      component: ChildBComponent
    }
  ]
},
  { path: 'admin', component: BoardAdminComponent},
  {
    path: "nav",
    component:NavbarComponent,
    data: { title: "nav" },
  },

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



