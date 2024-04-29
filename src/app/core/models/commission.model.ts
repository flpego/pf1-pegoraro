import { IStudent } from "../../layouts/dashboard/pages/students/models/student.model";
import { ISubject } from "./subject.model";

export interface ICommission {
    id: string,
    subjects: ISubject[],
    students: IStudent[],
}