import { Contract } from './contract';
import { User } from 'src/app/models/user';
import { PathLocationStrategy } from "@angular/common";

export class Facility {
    id?:number;
    title?: string;
    description?: string;
    pricePerHour?: number;
    categoryId: any;
    contract?:Contract;
    assistant?:{
      id?: number,
      name?: string,
      surname?: string,
      photo?: string,
      email?: string,
      username?: string,
      city?: string,
      phone?: string,
    };
  static assistant: any;
}