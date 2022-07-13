import { Component, OnInit } from '@angular/core';
import { Assistant } from 'src/app/model/assitant';
import { AssistantService } from 'src/app/services/assistant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.css']
})
export class AssistantComponent implements OnInit {
  public assistant: Assistant[] = [];

  selectedAssistant?: Assistant;
  onSelect(assistant: Assistant): void {
  this.selectedAssistant = assistant;
  }

  constructor(public assistantService: AssistantService, private router: Router) {}


  ngOnInit(): void {
    this.getAssistants();
  }
  getAssistants(): void {
    this.assistantService.getAssistants().subscribe((resp: any) => {
      this.assistant = resp;
      console.log(this.assistant);
    });
  }

  add(): void {
    this.router.navigate(["/assistant-add"]);
  }

  delete(id: number): void {
    this.assistantService.deleteAssistant(id).subscribe(
      () => {
        this.getAssistants();
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
