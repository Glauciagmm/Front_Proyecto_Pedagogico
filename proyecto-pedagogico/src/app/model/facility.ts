import { PathLocationStrategy } from "@angular/common";

export interface Facility {
    id:number;
    title: string;
    description: string;
    price: number;
    user:{
        id: number;
        photo:string;
        name: string;
        location: string;
    }
}