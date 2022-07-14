
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FacilityDetailComponent } from './components/facility-detail/facility-detail.component';
import { FacilityAddComponent } from './components/facility-add/facility-add.component';
import { FacilityEditComponent } from './components/facility-edit/facility-edit.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacilityDetailComponent,
    FacilityAddComponent,
    FacilityEditComponent,
    FacilitiesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
