import { ITeacher } from "../pages/teachers/models/teacher.model";

export const Teachers: ITeacher[] = [
    {
        id: 1,
        name: 'Walter White',
        coursesTaugth: [{ id: 100, courseName: "Quimica" }]
    },
    {
        id: 2,
        name: 'Ramiro Funez',
        coursesTaugth:[{ id: 101, courseName: "Matematica" }] 
    }
]