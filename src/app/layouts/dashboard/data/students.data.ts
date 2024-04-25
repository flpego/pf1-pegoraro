import { IStudent } from '../pages/students/models/student.model';

export const students: IStudent[] = [
    {
      id: 1,
      fullName: 'Juan Perez',
      email: 'juanperez@test.com',
      age: 25,
      courses: [100, 101],
      grade: [8, 9],
    },
    {
      id: 2,
      fullName: 'Ernesto Barros',
      email: '',
      age: 23,
      courses: [100],
      grade: [10],
    },
    {
      id: 3,
      fullName: 'Lucas Ibaniez',
      email: '',
      age: 25,
      courses: [100, 103],
      grade: [8],
    },
    {
      id: 4,
      fullName: 'Joaquin Pereira',
      email: '',
      age: 23,
      courses: [100, 102],
      grade: [10],
    },
    {
      id: 5,
      fullName: 'Ricardo For',
      email: '',
      age: 23,
      courses: [100, 101],
      grade: [10],
    },
  ];