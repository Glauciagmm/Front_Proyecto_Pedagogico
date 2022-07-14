import { AssistantService } from './../../services/assistant';
import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Assistant } from 'src/app/model/assitant';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  assistant!: Assistant;
  assistatID: string="0";

  selecteAssistant?: Assistant;
  onSelect(assistant:Assistant): void{
    this.selecteAssistant = assistant;
  }


  constructor(
    public assistantService: AssistantService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.assistantService.getAssistant(Number(this.assistatID)).subscribe({
      next: (resp: Assistant)=>{
        this.assistant = resp;
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
      },
    })
  }

}
