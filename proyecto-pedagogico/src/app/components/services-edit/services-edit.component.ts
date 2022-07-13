import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssistantService } from 'src/app/services/assistant';

@Component({
  selector: 'app-services-edit',
  templateUrl: './services-edit.component.html',
  styleUrls: ['./services-edit.component.css']
})
export class ServicesEditComponent implements OnInit {

  @Input() assistantData: any = {
    id: null,
    title: '',
    description: '',
    user: [],
  }

  constructor(public assistantService: AssistantService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.assistantService.getAssistant(this.route.snapshot.params['id']).subscribe((data: {})=>{
      this.assistantData = data;
    });
  }

  updateAssistant(): void {
    console.log(this.assistantService)
    this.assistantService.updateAssistant(this.assistantData).subscribe((result)=>{
      this.router.navigate(['/assistant-detail/',result._id]);
    }, (err)=>{
      console.log(err);
    });
  }

}
