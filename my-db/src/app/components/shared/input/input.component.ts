import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() public placeholder: string = '';
  @Output() public inputChange: EventEmitter<string> = new EventEmitter();

  public onInputChange($event: string): void {
    this.inputChange.emit($event);
  }
}
