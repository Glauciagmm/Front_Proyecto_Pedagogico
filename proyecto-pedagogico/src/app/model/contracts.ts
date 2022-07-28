import { PathLocationStrategy } from '@angular/common';

export interface Contracts {
  id: number;
  start: string;
  finish: string;
  totalPrice: number;

  facility: {
    id: number;
    title: string;
    description: string;
    pricePerHour: number;
    assistant: {
      id: number;
      photo: string;
      name: string;
      city: string;
    };
  };
}
