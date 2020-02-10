import {
  Component,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public caption: string = '';
  @Input() public type: ButtonType = ButtonType.Primary;
  @Output() public buttonClick: EventEmitter<string> = new EventEmitter();

  public onButtonClick(): void {
    this.buttonClick.emit();
  }
}
