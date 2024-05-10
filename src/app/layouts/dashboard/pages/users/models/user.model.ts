
export interface IUser {
    id: string,
    userName: string,
    name: string,
    lastname: string,
    email: string,
    password: string
    role: "STUDENT" | "TEACHER" | "ADMIN"
}