import { Facility } from './model/facility';
import { NgModule } from "@angular/core";
import { FacilitiesComponent } from "./components/facilities/facilities.component";
import { FacilityDetailComponent} from"./components/facility-detail/facility-detail.component";
import { FacilityAddComponent } from "./components/facility-add/facility-add.component";
import { FacilityEditComponent } from "./components/facility-edit/facility-edit.component";

import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [



    
  
    {
      path: "facility",
      component: FacilitiesComponent,  
      data: { title: "services-List" },
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
      data: { title: "services-Edit" },
    },
    { path: "", redirectTo: "/facility", pathMatch: "full" }
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  