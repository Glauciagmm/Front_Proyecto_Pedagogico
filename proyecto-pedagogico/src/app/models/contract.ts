import { Facility } from 'src/app/models/facility';
export interface Contract {
  id: number;
  start: string;
  finish: string;
  totalPrice: number;
  state: string;
  facility: {
    id: number;
    title: string;
    description: string;
    pricePerHour: number;
    categoryId: any;
    assistant: {
      id: number;
      name: string;
      surname?: string;
      photo?: string;
      email?: string;
      username?: string;
      city?: string;
      phone?: string;
    };
  };
  client: {
    id: number;
    photo: string;
    name: string;
    city: string;
  };
}
  