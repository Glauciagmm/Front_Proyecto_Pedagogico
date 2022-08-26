import { Optional } from "@angular/core";
export interface User {
  id?: number;
  name: string;
  surname: string;
  username: string;
  email: string;
  city: string;
  phone: number;
  photo: string;
  password: string;
  confirmPassword: string;
}

