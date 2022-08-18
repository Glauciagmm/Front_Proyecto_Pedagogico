import { CardComponent } from './components/card/card.component';
import { FacilityEditComponent } from './components/facility-edit/facility-edit.component';
import { FacilityAddComponent } from './components/facility-add/facility-add.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FacilityDetailComponent } from './components/facility-detail/facility-detail.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ClientComponent } from './components/client/client.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user-component/board-user-component'; 
import { BoardFacilityComponent } from './components/board-facility-component/board-facility-component'; 
import { BoardAdminComponent } from './components/board-admin-component/board-admin-component'; 
import { authInterceptorProviders } from './helpers/helpers';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    FacilitiesComponent,
    FacilityAddComponent,
    FacilityDetailComponent,
    FacilityAddComponent,
    FacilityEditComponent,
    CardComponent, 
    ClientComponent,
    ProfileComponent,
    BoardUserComponent,
    BoardFacilityComponent,
    BoardAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ authInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }

