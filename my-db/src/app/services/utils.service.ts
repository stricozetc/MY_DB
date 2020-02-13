import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { EmployesTable } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public employesTable: EmployesTable[] = [
    { name: 'Ивашнев Максим', date: '01/01/2019', title: '4', object: 'Объект 1', state: 'Свободен' },
    { name: 'Самойлов Роман', date: '02/06/2018', title: '5', object: 'Объект 2', state: 'Занят' },
    { name: 'Наконечный Антон', date: '26/09/2019', title: '1', object: 'Объект 3', state: 'Больничный' },
    { name: 'Курпаченко Роман', date: '17/01/2018', title: '4', object: 'Объект 1', state: 'Отпуск' },
    { name: 'Заботин Егор', date: '14/09/2016', title: '5', object: 'Объект 1', state: 'Свободен' },
    { name: 'Гачаренко Георгий', date: '19/12/2015', title: '3', object: 'Объект 6', state: 'Отпуск' },
    { name: 'Шаболда Артем', date: '15/12/2013', title: '2', object: 'Объект 4', state: 'Больничный' },
    { name: 'Куренок Роман', date: '28/02/2016', title: '4', object: 'Объект 5', state: 'Занят' },
    { name: 'Лисов Василий', date: '30/11/2017', title: '1', object: 'Объект 2', state: 'Занят' },
    { name: 'Белов Станислав', date: '07/05/2019', title: '6', object: 'Объект 3', state: 'Свободен' },
  ];
  public $employesTable: BehaviorSubject<EmployesTable[]> = new BehaviorSubject(this.employesTable);

  public filterByTitle(title: string): void {
    const filterArray = [];
    this.employesTable.map(item => {
      if (item.title === title) {
        filterArray.push(item);
      }
    });

    this.$employesTable.next(filterArray);
  }

  public filterByObject(object: string): void {
    const filterArray = [];
    this.employesTable.map(item => {
      if (item.object === object) {
        filterArray.push(item);
      }
    });

    this.$employesTable.next(filterArray);
  }

  public filterByState(state: string): void {
    const filterArray = [];
    this.employesTable.map(item => {
      if (item.state === state) {
        filterArray.push(item);
      }
    });

    this.$employesTable.next(filterArray);
  }

  public filterByName(name: string): void {
    const filterArray = [];
    this.employesTable.map(item => {
      if (item.name === name) {
        filterArray.push(item);
      }
    });

    this.$employesTable.next(filterArray);
  }

  public restoreTable(): void {
    this.$employesTable.next(this.employesTable);
  }
}
