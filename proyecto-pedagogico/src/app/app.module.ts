
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceDetailComponent } from './components/services-detail/service-detail.component';
import { ServicesAddComponent } from './components/services-add/services-add.component';
import { ServicesEditComponent } from './components/services-edit/services-edit.component';
import { AssistantComponent } from './components/assistant/assistant.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceDetailComponent,
    ServicesAddComponent,
    ServicesEditComponent,
    AssistantComponent,
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
