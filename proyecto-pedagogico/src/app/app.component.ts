import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  api_key = 'd1a7cc2586254b26b959a5fc20c6de7b';

  url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + this.api_key;
  ipAddress = "";

city:any= "";

region:String = '';

country:String = '';
  title = 'proyecto-pedagogico';
  constructor(private http:HttpClient) { }

  

  ngOnInit() {

      this.getGeolocationData();

  }

  

  getGeolocationData()

  {
    this.http.get(this.url).subscribe((res:any)=>{
      console.log(res.country);

       this.ipAddress = res.ip_address;

      this.city = res.city;

      this.region = res.region;

      this.country = res.country;
     

    });

  }

}

