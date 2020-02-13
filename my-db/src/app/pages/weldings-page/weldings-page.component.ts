import { Component } from '@angular/core';

import { SelectOption } from 'src/app/interfaces';
import { WeldingsService } from '../../services/weldings.service';

@Component({
  selector: 'app-weldings-page',
  templateUrl: './weldings-page.component.html',
  styleUrls: ['./weldings-page.component.scss']
})
export class WeldingsPageComponent {
  public objectOptions: SelectOption[] = [
    { value: 'chooseObject', viewValue: 'Выберете объект' },
    { value: 'object1', viewValue: 'Объект 1' },
    { value: 'object2', viewValue: 'Объект 2' },
    { value: 'object3', viewValue: 'Объект 3' },
    { value: 'object4', viewValue: 'Объект 4' },
    { value: 'object5', viewValue: 'Объект 5' },
    { value: 'object6', viewValue: 'Объект 6' },
  ];
  public stateOptions: SelectOption[] = [
    { value: 'chooseState', viewValue: 'Выберете состояние' },
    { value: 'busy', viewValue: 'Используется' },
    { value: 'service', viewValue: 'Обслуживание' },
    { value: 'free', viewValue: 'Свободен' },
  ];
  public modelOptions: SelectOption[] = [
    { value: 'chooseModel', viewValue: 'Выберете модель' },
    { value: 'model1', viewValue: 'Модель 1' },
    { value: 'model2', viewValue: 'Модель 2' },
    { value: 'model3', viewValue: 'Модель 3' },
    { value: 'model4', viewValue: 'Модель 4' },
    { value: 'model5', viewValue: 'Модель 5' },
    { value: 'model6', viewValue: 'Модель 6' },
  ];
  public model: string = '';
  public object: string = '';
  public state: string = '';
  public search: string = '';

  constructor(private weldingsService: WeldingsService) { }

  public searchChange(value: any, element?: any): void {
    if (element) {
      element.value = '';
    }
    this.search = value.value;
  }
  public modelSelectChange(value: any, element?: any) {
    if (element) {
      element.options.selectedIndex = 0;
    }
    this.modelOptions.forEach((item: { value: string, viewValue: string }) => {
      if (item.value === value.value) {
        this.model = item.viewValue;
      }
    });
  }
  public objectSelectChange(value: any, element?: any) {
    if (element) {
      element.options.selectedIndex = 0;
    }
    this.objectOptions.forEach((item: { value: string, viewValue: string }) => {
      if (item.value === value.value) {
        this.object = item.viewValue;
      }
    });
  }
  public stateSelectChange(value: any, element?: any) {
    if (element) {
      element.options.selectedIndex = 0;
    }
    this.stateOptions.forEach((item: { value: string, viewValue: string }) => {
      if (item.value === value.value) {
        this.state = item.viewValue;
      }
    });
  }
  public searchEngine(): void {
    if (this.search) {
      this.weldingsService.filterByName(this.search);
    }
    if (this.model) {
      this.weldingsService.filterByModel(this.model);
    }
    if (this.object) {
      this.weldingsService.filterByObject(this.object);
    }
    if (this.state) {
      this.weldingsService.filterByState(this.state);
    }
  }
  public clear(): void {
    this.weldingsService.restoreTable();
    this.modelSelectChange('Выберете разряд', document.getElementById('model'));
    this.objectSelectChange('Выберете объект', document.getElementById('object'));
    this.stateSelectChange('Выберете состояние', document.getElementById('state'));
    this.searchChange('', document.getElementById('search'));
  }

}
