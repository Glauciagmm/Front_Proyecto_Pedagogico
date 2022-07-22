import { FacilityEditComponent } from './components/facility-edit/facility-edit.component';
import { FacilityAddComponent } from './components/facility-add/facility-add.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FacilityDetailComponent } from './components/facility-detail/facility-detail.component';

import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
<<<<<<< HEAD
/*     FacilitiesComponent,
    FacilityAddComponent,
    FacilityDetailComponent,
    FacilityEditComponent */
=======
    FacilitiesComponent,
    FacilityAddComponent,
    FacilityDetailComponent,
    FacilityEditComponent
>>>>>>> 40256761abf193676b6603bb5d5665e36a0479a6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
