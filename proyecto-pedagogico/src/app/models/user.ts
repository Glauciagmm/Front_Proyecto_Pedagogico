import { Optional } from "@angular/core";
export interface User {
  id?: number;
  name: string;
  surname: string;
  email: string;
  username: string;
  password: string;
  city: string;
  photo: string;
  phone: number;
  confirmPassword: string;
}
