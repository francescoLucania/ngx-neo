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
import { EMPTY_FUNCTION } from '../../constants';
import { TInputEvent } from '../../types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'neo-ui-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioStandaloneComponent),
      multi: true,
    },
  ],
})
export class RadioStandaloneComponent implements OnInit {
  public static idCounter = 1;

  @Input() public radioId: string; // input ID: если не указан, генерируется уникальный ID
  @Input() public disabled = false; // состояние: по умолчанию - активное
  @Input() public label: string;
  @Input() public description: string;
  @Input() public errorMessage: string;
  @Input() public required = false;
  @Input() public name: string;
  @Input() public value: string;
  @Input() public checked: boolean;

  @Output() private changedEvent = new EventEmitter<string>();
  @Output() private focusEvent = new EventEmitter<FocusEvent>();
  @Output() private blurEvent = new EventEmitter<FocusEvent>();

  /** The method to be called in order to update ngModel */
  private controlValueAccessorChangeFn = EMPTY_FUNCTION;
  private onTouched = EMPTY_FUNCTION;
  private _controlValueAccessorChangeFn = EMPTY_FUNCTION;

  constructor(private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    // генеририрует уникальный ID, если не указан radioId
    if (!this.radioId) {
      this.radioId = 'app-radio-' + RadioStandaloneComponent.idCounter++;
    }
  }

  public onSelected(event: TInputEvent): void {
    // всегда true, но вызывается только для активного
    this.checked = event.target.checked;
    // для остальных из данной группы синхронизация произойдет через модель
    this.controlValueAccessorChangeFn(this.value);
    this.changedEvent.emit(this.value);
  }

  public notifyFocusEvent(event: FocusEvent): void {
    this.focusEvent.emit(event);
  }

  public notifyBlurEvent(event: FocusEvent): void {
    this.blurEvent.emit(event);
  }

  // Обязательные методы ControlValueAccessor:

  public writeValue(value: string): void {
    this.checked = value === this.value;
    this.cdr.detectChanges();
  }

  public registerOnChange(fn: (value: unknown) => void): void {
    this.controlValueAccessorChangeFn = fn;
    this.cdr.detectChanges();
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
    this.cdr.detectChanges();
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.detectChanges();
  }
}
