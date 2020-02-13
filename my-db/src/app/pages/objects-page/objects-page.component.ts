import { Component } from '@angular/core';

import { ObjectsService } from 'src/app/services/objects.service';

@Component({
  selector: 'app-objects-page',
  templateUrl: './objects-page.component.html',
  styleUrls: ['./objects-page.component.scss']
})
export class ObjectsPageComponent {
  public search: string = '';
  constructor(private objectsService: ObjectsService) { }

  public searchChange(value: any, element?: any): void {
    if (element) {
      element.value = '';
    }
    this.search = value.value;
  }
  public searchEngine(): void {
    if (this.search) {
      this.objectsService.filterByObject(this.search);
    }
  }
  public clear(): void {
    this.objectsService.restoreTable();
    this.searchChange('', document.getElementById('search'));
  }

}
