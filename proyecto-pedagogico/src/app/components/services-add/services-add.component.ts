import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssistantService } from 'src/app/services/assistant';

@Component({
  selector: 'app-services-add',
  templateUrl: './services-add.component.html',
  styleUrls: ['./services-add.component.css']
})
export class ServicesAddComponent implements OnInit {

  @Input() assistantData = {
    id:0,
    title: "",
    description: "",
    pricePerHour: 0,
    user: {
      id: 0,
      photo:"",
      name: "",
      location: "",
    }
  };

  

  constructor(
    public assistantService: AssistantService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
  }

  addAssitant(): void{
    console.log(this.assistantData)
    this.assistantService.addAssistant(this.assistantData).subscribe((result)=>{
      this.router.navigate([`/assistant-detail`, result._id]);
    },
    (err)=>{
      console.log(err);
    }
    );
  }

}
