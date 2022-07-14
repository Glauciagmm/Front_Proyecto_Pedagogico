import { Component, OnInit, ChangeDetectionStrategy,  } from '@angular/core';
import { FacilityService } from 'src/app/services/facility';
import { Router } from '@angular/router';


import { HttpErrorResponse } from '@angular/common/http';

import { Categories } from 'src/app/model/categories';
import { Facility } from 'src/app/model/facility';
import { CategoryServices } from 'src/app/services/category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  //public categories: Category[] = [];
  categories!: Categories;
  categoryId: string = "0";
  public assistant: Facility[] = [];

  selectedCategory?: Categories;
  selectedAssistant?: Facility;
  onSelect(category: Categories, assistant: Facility): void {
  this.selectedCategory = category;
  this.selectedAssistant = assistant;
  }  

  constructor(
    private categoryServices: CategoryServices, 
    private router: Router,
    private assistantService: FacilityService
    ) { }

  ngOnInit(): void {
    this.getCategory();
    this.getFacilities();
  }

  //Seleciona una categoria de la Base de Datos
  getCategory(): void {
    this.categoryServices.getCategory(Number(this.categoryId)).subscribe({
      next: (resp: Categories)=>{
        this.categories = resp;
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
      },
    })
  }

  // Recoge todos los Servicios registrados  en la Base de Datos
  getFacilities(): void {
    this.assistantService.getFacilities().subscribe((resp: any) => {
      this.assistant = resp;
      console.log(this.assistant);
    });
  }

}
