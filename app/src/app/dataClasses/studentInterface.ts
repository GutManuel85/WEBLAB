import {Subject} from "./subject";

export interface StudentInterface{
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  birthdate: string;
  enrolledSubjects: string[];
}
