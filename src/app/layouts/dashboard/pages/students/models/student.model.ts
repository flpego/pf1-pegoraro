import { ICourse } from "../../courses/models/course.model";

export interface IStudent {
    id: number,
    fullName: string,
    email: string,
    age: number,
    grade: number[],
    courses: ICourse[];
}