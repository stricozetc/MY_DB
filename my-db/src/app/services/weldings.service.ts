import { Injectable } from '@angular/core';

import { WeldingTable } from '../interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeldingsService {
  public weldingsTable: WeldingTable[] = [
    { name: 'Аппарат 1' , dateSertification: '28/10/2018', model: 'Модель 1', object: '-', state: 'Свободен' },
    { name: 'Аппарат 2' , dateSertification: '02/11/2019', model: 'Модель 2', object: 'Объект 3', state: 'Используется' },
    { name: 'Аппарат 3' , dateSertification: '28/03/2018', model: 'Модель 6', object: 'Объект 2', state: 'Используется' },
    { name: 'Аппарат 4' , dateSertification: '04/10/2019', model: 'Модель 3', object: 'Объект 3', state: 'Используется' },
    { name: 'Аппарат 5' , dateSertification: '18/03/2018', model: 'Модель 4', object: 'Объект 1', state: 'Используется' },
    { name: 'Аппарат 6' , dateSertification: '28/04/2018', model: 'Модель 1', object: '-', state: 'Используется' },
    { name: 'Аппарат 7' , dateSertification: '28/04/2019', model: 'Модель 5', object: '-', state: 'Свободен' },
    { name: 'Аппарат 8' , dateSertification: '22/06/2018', model: 'Модель 5', object: '-', state: 'Обслуживание' },
    { name: 'Аппарат 9' , dateSertification: '09/11/2019', model: 'Модель 3', object: 'Объект 2', state: 'Обсулживание' },
    { name: 'Аппарат 10' , dateSertification: '18/05/2018', model: 'Модель 6', object: 'Объект 2', state: 'Используется' },
  ];

  public $weldingsTable: BehaviorSubject<WeldingTable[]> = new BehaviorSubject(this.weldingsTable);

  public filterByModel(model: string): void {
    const filterArray = [];
    this.weldingsTable.map(item => {
      if (item.model === model) {
        filterArray.push(item);
      }
    });

    this.$weldingsTable.next(filterArray);
  }

  public filterByObject(object: string): void {
    const filterArray = [];
    this.weldingsTable.map(item => {
      if (item.object === object) {
        filterArray.push(item);
      }
    });

    this.$weldingsTable.next(filterArray);
  }

  public filterByState(state: string): void {
    const filterArray = [];
    this.weldingsTable.map(item => {
      if (item.state === state) {
        filterArray.push(item);
      }
    });

    this.$weldingsTable.next(filterArray);
  }

  public filterByName(name: string): void {
    const filterArray = [];
    this.weldingsTable.map(item => {
      if (item.name === name) {
        filterArray.push(item);
      }
    });

    this.$weldingsTable.next(filterArray);
  }

  public restoreTable(): void {
    this.$weldingsTable.next(this.weldingsTable);
  }
}
