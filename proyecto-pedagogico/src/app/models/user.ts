import { Optional } from "@angular/core";
export interface User {
  id?: number;
  name: string;
  surname: string;
  username: string;
  email: string;
  city: string;
  telephone: number;
  picture: string;
  password: string;
  confirmPassword: string;
}

