import { Assistant } from './model/assitant';
import { NgModule } from "@angular/core";
import { AssistantComponent } from "./components/assistant/assistant.component";
import { ServiceDetailComponent} from"./components/services-detail/service-detail.component";
import { ServicesAddComponent } from "./components/services-add/services-add.component";
import { ServicesEditComponent } from "./components/services-edit/services-edit.component";

import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [



    
  
    {
      path: "assistant",
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
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  