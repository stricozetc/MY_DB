import {
  ObjectInfoTable,
  EmployInfoTable,
  WeldingInfoTable,
} from '../interfaces';

export const OBJECT_INFO_TABLE: ObjectInfoTable[] = [
  { task: 'Задача 1' , employ: '', welding: 'Hydrogen', dates: '1.0079', state: 'H' },
  { task: 'Задача 2' , employ: '', welding: 'Helium', dates: '4.0026', state: 'He' },
  { task: 'Задача 3' , employ: '', welding: 'Lithium', dates: '6.941', state: 'Li' },
  { task: 'Задача 4' , employ: '', welding: 'Beryllium', dates: '9.0122', state: 'Be' },
  { task: 'Задача 5' , employ: '', welding: 'Boron', dates: '10.811', state: 'B' },
  { task: 'Задача 6' , employ: '', welding: 'Carbon', dates: '12.0107', state: 'C' },
  { task: 'Задача 7' , employ: '', welding: 'Nitrogen', dates: '14.0067', state: 'N' },
  { task: 'Задача 8' , employ: '', welding: 'Oxygen', dates: '15.9994', state: 'O' },
  { task: 'Задача 9' , employ: '', welding: 'Fluorine', dates: '18.9984', state: 'F' },
  { task: 'Задача 10' , employ: '', welding: 'Neon', dates: '20.1797', state: 'Ne' },
];

export const EMPLOY_INFO_TABLE: EmployInfoTable[] = [
  { object: 'Задача 1' , task: '', welding: 'Hydrogen', date: '1.0079', state: 'H' },
  { object: 'Задача 2' , task: '', welding: 'Helium', date: '4.0026', state: 'He' },
  { object: 'Задача 3' , task: '', welding: 'Lithium', date: '6.941', state: 'Li' },
  { object: 'Задача 4' , task: '', welding: 'Beryllium', date: '9.0122', state: 'Be' },
  { object: 'Задача 5' , task: '', welding: 'Boron', date: '10.811', state: 'B' },
  { object: 'Задача 6' , task: '', welding: 'Carbon', date: '12.0107', state: 'C' },
  { object: 'Задача 7' , task: '', welding: 'Nitrogen', date: '14.0067', state: 'N' },
  { object: 'Задача 8' , task: '', welding: 'Oxygen', date: '15.9994', state: 'O' },
  { object: 'Задача 9' , task: '', welding: 'Fluorine', date: '18.9984', state: 'F' },
  { object: 'Задача 10' , task: '', welding: 'Neon', date: '20.1797', state: 'Ne' },
];

export const WELDING_INFO_TABLE: WeldingInfoTable[] = [
  { object: 'Задача 1' , task: '', employ: '4', date: '1.0079', state: 'H' },
  { object: 'Задача 2' , task: '', employ: '5', date: '4.0026', state: 'He' },
  { object: 'Задача 3' , task: '', employ: '1', date: '6.941', state: 'Li' },
  { object: 'Задача 4' , task: '', employ: '4', date: '9.0122', state: 'Be' },
  { object: 'Задача 5' , task: '', employ: '5', date: '10.811', state: 'B' },
  { object: 'Задача 6' , task: '', employ: '3', date: '12.0107', state: 'C' },
  { object: 'Задача 7' , task: '', employ: '2', date: '14.0067', state: 'N' },
  { object: 'Задача 8' , task: '', employ: '4', date: '15.9994', state: 'O' },
  { object: 'Задача 9' , task: '', employ: '1', date: '18.9984', state: 'F' },
  { object: 'Задача 10' , task: '', employ: '6', date: '20.1797', state: 'Ne' },
];
