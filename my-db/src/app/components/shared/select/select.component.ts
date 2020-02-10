import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { SelectOption } from '../../../interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() public placeholder: string = '';
  @Input() public selectOptions: SelectOption;
  @Output() public selectChange: EventEmitter<string> = new EventEmitter();

  public onSelectOptionChange(event: any): void {
    this.selectChange.emit(event.value);
  }
}
