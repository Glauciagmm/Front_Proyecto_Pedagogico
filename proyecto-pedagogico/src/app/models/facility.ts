import { User } from 'src/app/models/user';
import { PathLocationStrategy } from "@angular/common";

export class Facility {
    id?:number;
    title?: string;
    description?: string;
    pricePerHour?: number;
    category: any;
    assistant?:{
      id?: number,
      name?: string,
      surname?: string,
      picture?: string,
      email?: string,
      username?: string,
      city?: string,
      phone?: string,
    };
}