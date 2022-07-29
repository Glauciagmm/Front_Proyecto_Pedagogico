import { User } from 'src/app/models/user';
import { PathLocationStrategy } from "@angular/common";

export interface Facility {
    id?:number;
    title: string;
    description: string;
    pricePerHour: number;
    user: User;   
}