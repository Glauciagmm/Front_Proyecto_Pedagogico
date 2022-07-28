import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FacilityDetailComponent} from"./components/facility-detail/facility-detail.component";
import { FacilityAddComponent } from "./components/facility-add/facility-add.component";
import { FacilityEditComponent } from "./components/facility-edit/facility-edit.component";
import { CardComponent } from './components/card/card.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  
  {    path: "facility",
    component: CardComponent,  
    data: { title: "facility-List" },
  },
  {
    path: "facility-details",
    component: FacilityDetailComponent,
    data: { title: "services-Details" },
  },
  {
    path: "facility-add",
    component: FacilityAddComponent,
    data: { title: "Services Add" },
  },
  {
    path: "facility-edit/:id",
    component: FacilityEditComponent,
    data: { title: "facility-Edit" },
  },
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



