export interface IUser {
  id: string;
  userName: string;
  name: string;
  lastname: string;
  password: string;
  role: 'STUDENT' | 'TEACHER' | 'ADMIN';
}

export interface CreateUserPayload {
  name: string | null;
  lastName: string | null;
  userName: string | null;
  password: string | null;
  role: 'STUDENT' | 'TEACHER' | 'ADMIN';
}
