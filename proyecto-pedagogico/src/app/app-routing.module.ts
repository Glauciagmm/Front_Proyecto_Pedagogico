import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AssistantComponent } from "./components/assistant/assistant.component";
import { ServiceDetailComponent} from"./components/services-detail/service-detail.component";
import { ServicesAddComponent } from "./components/services-add/services-add.component";
import { ServicesEditComponent } from "./components/services-edit/services-edit.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  {    path: "assistant",
    component: AssistantComponent,  
    data: { title: "services-List" },
  },
  {
    path: "services-details",
    component: ServiceDetailComponent,
    data: { title: "services-Details" },
  },
  {
    path: "services-add",
    component: ServicesAddComponent,
    data: { title: "Services Add" },
  },
  {
    path: "services-edit/:id",
    component: ServicesEditComponent,
    data: { title: "services-Edit" },
  },
  { path: "", redirectTo: "/assistance", pathMatch: "full" }
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



  
