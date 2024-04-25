import { ICourse } from "../../courses/models/course.model";

export interface ITeacher {
    id: number;
    name: string,
    coursesTaugth: ICourse[];
}