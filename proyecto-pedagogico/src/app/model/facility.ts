import { PathLocationStrategy } from "@angular/common";

export interface Facility {
    id:number;
    title: string;
    description: string;
    pricePerHour: number;
    user:{
        id: number;
        photo:string;
        name: string;
        location: string;
    }
}