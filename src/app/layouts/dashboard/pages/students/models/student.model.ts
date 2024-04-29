import { ISubject } from "../../../../../core/models/subject.model";

export interface IStudent {
    id: number,
    fullName: string,
    email: string,
    age: number,
    grades: number[],
    courses: any[];
}