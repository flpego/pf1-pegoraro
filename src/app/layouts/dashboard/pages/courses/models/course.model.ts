import { IStudent } from "../../students/models/student.model";
import { ITeacher } from "../../teachers/models/teacher.model";

export interface ICourse {
    id: number,
    courseName: string,
    students?: IStudent[];
    teacher?: ITeacher[];
}