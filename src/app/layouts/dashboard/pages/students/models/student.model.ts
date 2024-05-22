
export interface IStudent {
    id: string,
    name: string,
    lastName: string,
    email: string,
    grades: IGrade[],
}
export interface IGrade{
    createdAt: Date,
    title: string,
    grade: number
}

export interface CreateStudentPayload {
    name: string | null,
    lastName: string | null,
    email: string | null,
    grades:IGrade[] | null,
}
