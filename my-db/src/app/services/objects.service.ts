import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ObjectTable } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {
  public objectTable: ObjectTable[] = [
    { object: 'Объект 1' , taskCount: '4/10', objectResult: '-' },
    { object: 'Объект 2' , taskCount: '5/8', objectResult: '-' },
    { object: 'Объект 3' , taskCount: '7/12', objectResult: '-' },
    { object: 'Объект 4' , taskCount: '12/12', objectResult: 'Объект успешно сдан. Все задачи выполнены в срок' },
    { object: 'Объект 5' , taskCount: '4/11', objectResult: '-' },
    { object: 'Объект 6' , taskCount: '7/8', objectResult: '-' },
  ];
  public $objectTable: BehaviorSubject<ObjectTable[]> = new BehaviorSubject(this.objectTable);

  public filterByObject(name: string): void {
    const filterArray = [];
    this.objectTable.map(item => {
      if (item.object === name) {
        filterArray.push(item);
      }
    });

    this.$objectTable.next(filterArray);
  }

  public restoreTable(): void {
    this.$objectTable.next(this.objectTable);
  }
}
