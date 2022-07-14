import { ServicesEditComponent } from './components/services-edit/services-edit.component';
import { ServicesAddComponent } from './components/services-add/services-add.component';
import { AssistantComponent } from './components/assistant/assistant.component';
import { ServiceDetailComponent } from './components/services-detail/service-detail.component';

import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AssistantComponent,
    ServicesAddComponent,
    ServiceDetailComponent,
    ServicesEditComponent
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
