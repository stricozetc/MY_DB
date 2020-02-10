import {
  Component,
  Output,
  EventEmitter,
  Input
} from '@angular/core';

@Component({
  selector: 'app-range-datepicker',
  templateUrl: './range-datepicker.component.html',
  styleUrls: ['./range-datepicker.component.scss']
})
export class RangeDatepickerComponent {
  @Input() public startDate: Date = new Date();
  @Input() public endDate: Date = new Date();
  @Output() public changeStartDate: EventEmitter<Date> = new EventEmitter();
  @Output() public changeEndDate: EventEmitter<Date> = new EventEmitter();

  public handleChangeStartDate($event: any): void {
    this.changeStartDate.emit($event.value);
  }

  public handleChangeEndDate($event: any): void {
    this.changeEndDate.emit($event.value);
  }

}
