import { AllcontractsComponent } from './components/admin/allcontracts/allcontracts.component'; 
import { AllusersComponent } from './components/admin/allusers/allusers.component';
import { AllfacilitiesComponent } from './components/admin/allfacilities/allfacilities.component';
import { ClientComponent } from './components/clients/client/client.component';
import { NextjobsComponent } from './components/contracts/nextjobs/nextjobs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FacilityDetailComponent } from './components/assistants/facility-detail/facility-detail.component';
import { FacilityAddComponent } from './components/assistants/facility-add/facility-add.component';
import { FacilityEditComponent } from './components/assistants/facility-edit/facility-edit.component';
import { CardComponent } from './components/assistants/card/card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user-component/board-user-component';
import { BoardFacilityComponent } from './components/assistants/board-facility-component/board-facility-component';
import { BoardAdminComponent } from './components/admin/board-admin-component/board-admin-component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { ChildAComponent } from './child-a.component';
import { ChildBComponent } from './child-b.component';
import { MycontractsComponent } from './components/contracts/mycontracts/mycontracts.component';
import { AuthGuard } from './helpers/AuthGuard'; 

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'facility', component: CardComponent, data: { title: 'Facility List' },},
  { path: 'facilityfilter', component: FacilitiesComponent },
  { path: 'facility/:categoryId', component: FacilitiesComponent, data: { title: 'Facility List filter by category' },},
  { path: 'facility/:city', component: FacilitiesComponent, data: { title: 'Facility List filter by city' },},
  { path: 'facility-details', component: FacilityDetailComponent, data: { title: 'Facility Details' },},
  { path: 'facility-add',  component: FacilityAddComponent, canActivate: [AuthGuard], data: {role: ['ROLE_ADMIN', 'ROLE_FACILITY']},},
  { path: 'facility-edit/:id', component: FacilityEditComponent,  canActivate: [AuthGuard], data: {role: ['ROLE_ADMIN', 'ROLE_FACILITY']},},
  { path: 'mycontracts', component: MycontractsComponent,  canActivate: [AuthGuard], data: {role: ['ROLE_ADMIN', 'ROLE_FACILITY']},},
  { path: 'nextjobs', component: NextjobsComponent,  canActivate: [AuthGuard], data: {role: ['ROLE_FACILITY']},},
  { path: 'client', component: ClientComponent, canActivate: [AuthGuard], data: {role: ['ROLE_USER']},},
  { path: 'profile', component: ProfileComponent,  canActivate: [AuthGuard], data: {role: ['ROLE_ADMIN', 'ROLE_FACILITY', 'ROLE_USER']},},
  { path: 'allfacilities', component: AllfacilitiesComponent,  canActivate: [AuthGuard], data: {role: ['ROLE_ADMIN']}, },
  { path: 'allusers', component: AllusersComponent,  canActivate: [AuthGuard], data: {role: ['ROLE_ADMIN']},},
  { path: 'allcontracts', component: AllcontractsComponent, canActivate: [AuthGuard], data: {role: ['ROLE_ADMIN']},},
  { path: 'user', component: BoardUserComponent,data: {role: ['ROLE_USER']}},
  { path: 'facility-board', component: BoardFacilityComponent, 
      children: [ 
        { path: '', redirectTo: 'facilityA', pathMatch: 'full',},
        { path: 'facilityA', component: ChildAComponent,},
        { path: 'facilityB', component: ChildBComponent,},
      ],canActivate: [AuthGuard], data: {role: ['ROLE_FACILITY']},
  },
  { path: 'admin', component: BoardAdminComponent,  canActivate: [AuthGuard], data: {role: ['ROLE_ADMIN']}, },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
    }),
    CommonModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
