import { ICommission } from '../../../core/models/commission.model';
import { students } from './students.data';

export const COMMISSIONS: ICommission[] = [
  {
    id: 'C01',
    subjects: [
      {
        id: 100,
        courseName: 'Quimica',
        teacher: { id: 1, name: 'Walter White' },
      },
      {
        id: 101,
        courseName: 'Matematicas',
        teacher: { id: 2, name: 'Ramiro Funez' },
      },
      { id: 102, courseName: 'Materia3', teacher: { id: 12, name: '' } },
      { id: 103, courseName: 'Materia4' ,teacher: { id: 12, name: '' }},
      { id: 104, courseName: 'Materia5' , teacher: { id: 12, name: '' }},
    ],
    students: students,
  },
];
