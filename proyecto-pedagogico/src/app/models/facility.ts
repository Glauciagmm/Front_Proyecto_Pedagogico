import { User } from 'src/app/models/user';
import { PathLocationStrategy } from "@angular/common";

export interface Facility {
    id?:number;
    title: string;
    description: string;
    pricePerHour: number;
    assistant:{
      id?: number,
      name?: string,
      surname?: string,
      photo?: string,
      email?: string,
      username?: string,
      city?: string,
      phone?: number
    }
}