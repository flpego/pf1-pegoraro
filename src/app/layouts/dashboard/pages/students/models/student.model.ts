export interface IStudent {
    id: number,
    name: string,
    lastName: string,
    email: string,
    grades: number[],
}

export interface CreateStudentPayload {
    name: string | null,
    lastName: string | null,
    email: string | null,
    grades: number[] | null,
}
