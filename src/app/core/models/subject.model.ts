import { ITeacher } from "../../layouts/dashboard/pages/teachers/models/teacher.model";

export interface ISubject {
  id: number;
  courseName: string;
  teacher: ITeacher;
}
