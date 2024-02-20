import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'neo-ui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements OnInit {
  public static idCounter = 1;

  @Input() public radioId: string; // input ID: если не указан, генерируется уникальный ID
  @Input() public disabled = false; // состояние: по умолчанию - активное
  @Input() public label: string;
  @Input() public description: string;
  @Input() public errorMessage: string;
  @Input() public required = false;
  @Input() public value: string;
  @Input() public checked: boolean;

  @Output() private changed = new EventEmitter<string>();
  @Output() private focus = new EventEmitter<FocusEvent>();
  @Output() private blur = new EventEmitter<FocusEvent>();

  /** The method to be called in order to update ngModel */
  private controlValueAccessorChangeFn: (value: any) => void = () => {};
  private onTouched: () => any = () => {};
  private _controlValueAccessorChangeFn: (value: any) => void = () => {};

  constructor(private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    // генеририрует уникальный ID, если не указан radioId
    if (!this.radioId) {
      this.radioId = 'app-radio-' + CheckboxComponent.idCounter++;
    }
  }

  public onSelected(event: any): void {
    // всегда true, но вызывается только для активного
    this.checked = event.target.checked;
    // для остальных из данной группы синхронизация произойдет через модель
    console.log('this.value', this.value);
    this.controlValueAccessorChangeFn(this.value);
    this.changed.emit(this.value);
  }

  public notifyFocusEvent(event: FocusEvent): void {
    this.focus.emit(event);
  }

  public notifyBlurEvent(event: FocusEvent): void {
    this.blur.emit(event);
  }

  // Обязательные методы ControlValueAccessor:

  public writeValue(value: any): void {
    this.checked = value === this.value;
    this.cdr.detectChanges();
  }

  public registerOnChange(fn: (value: any) => void): void {
    this.controlValueAccessorChangeFn = fn;
    this.cdr.detectChanges();
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
    this.cdr.detectChanges();
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.detectChanges();
  }
}
