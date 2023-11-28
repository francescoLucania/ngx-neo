import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  forwardRef,
  Host,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
  SkipSelf,
  ViewChild,
} from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Suggest, SuggestItem } from './models/suggest';
import { HelperService } from '../../services/helper';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'neo-ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent
  implements OnInit, OnChanges, AfterViewInit, DoCheck, OnDestroy, ControlValueAccessor
{
  @ViewChild('input') protected inputElement: ElementRef<HTMLInputElement>;

  @HostBinding('attr.id')
  public externalId: string | null = '';

  // focus и blur искусственные, одноименные с естественными, остальные события просто всплывают
  @Output() public cleared = new EventEmitter<void>();
  @Output() public focus = new EventEmitter<FocusEvent>();
  @Output() public blur = new EventEmitter<FocusEvent>();
  @Output() public selectSuggest = new EventEmitter<Suggest | SuggestItem>();
  // эти события не перехватываются и всплывают:
  // input, change, keydown, keyup, keypress, click, dblclick, touchstart, touchend,
  // touchmove, mousedown, mouseup, mouseenter, mouseleave, mouseover, mouseout, mousemove

  // name используется для назначения аттрибуту, но чтобы связать контрол с формой - используйте formControlName
  @Input() public name?: string;
  @Input() public formControlName?: string;
  @Input() public type?: string; // password, email, number итд
  @Input() public minlength?: string | number;
  @Input() public maxlength?: string | number;
  @Input() public autocomplete: boolean;
  @Input() public placeholder?: string;
  @Input() public tabIndex?: string | number;
  @Input() public ariaLabel?: string;
  @Input() public readOnly?: boolean;
  @Input() public disabled = false;
  @Input() public multiline?: boolean;
  @Input() public commitOnInput = true; // коммитить по input или по change
  @Input() public invalid = false;
  @Input() public size: 'small' | 'base' | 'large' = 'base';

  @Input()
  public set id(value: string) {
    this._ID = value;
    this.externalId = null;
  }

  public get id() {
    return this._ID;
  }

  public value = '';

  private destroyed = false;
  public focused = false;
  public touched = false;
  public invalidDisplayed = false;
  public control: AbstractControl | null;

  private _ID = '';
  private onTouchedCallback: () => void;
  public showToggle = false;
  public showPassword = false;

  constructor(
    private changeDetection: ChangeDetectorRef,
    @Optional() @Host() @SkipSelf() private controlContainer: ControlContainer,
  ) {}

  public ngOnInit(): void {
    if (this.controlContainer && this.formControlName) {
      this.control = this.controlContainer?.control?.get(this.formControlName)
        ? this.controlContainer?.control?.get(this.formControlName)
        : null;
    } else {
      this.control = null;
    }
  }

  public registerOnChange(fn: any): void {
    this.commit = fn;
  }

  public ngAfterViewInit(): void {
    // this.focusManager.register(this);
    this.check();
  }

  public ngOnChanges(changes: SimpleChanges) {
    this.check();
  }

  public ngDoCheck() {
    if (this.control) {
      this.touched = this.control.touched;
    }
    this.check();
  }

  public ngOnDestroy() {
    this.destroyed = true;
  }

  public showButtonKeypress(event: Event): void {
    event.stopPropagation();
  }

  public switchPasswordMode(): void {
    this.showPassword = !this.showPassword;
    this.changeDetection.detectChanges();
  }

  public writeValue(value: string | number) {
    this.value = value === null || value === undefined ? '' : '' + value;
    if (this.multiline && this.inputElement) {
      this.inputElement.nativeElement.value = this.value;
    }
    this.check();
    if (!this.destroyed) {
      this.changeDetection.detectChanges();
    }
  }

  public handleBlur() {
    this.focused = false;
    if (this.onTouchedCallback) {
      this.onTouchedCallback();
    }
    this.check();

    this.blur.emit();
    this.changeDetection.detectChanges();
  }

  public handleFocus() {
    this.focused = this.touched = true;
    if (this.onTouchedCallback) {
      this.onTouchedCallback();
    }
    this.check();
    this.focus.emit();
  }

  public returnFocus(e?: Event) {
    if (
      this.inputElement &&
      this.inputElement.nativeElement &&
      (!e || e.target !== this.inputElement.nativeElement)
    ) {
      this.inputElement.nativeElement.focus();
      HelperService.resetSelection(this.inputElement.nativeElement);
    }
  }

  public loseFocus() {
    this.inputElement.nativeElement.blur();
  }

  public handleInput(e: Event) {
    this.value = this.inputElement.nativeElement.value;
    if (this.commitOnInput) {
      this.commit(this.value);
    }
    this.check();
  }

  public handleChange(): void {
    this.value = this.inputElement.nativeElement.value;
    if (!this.commitOnInput) {
      this.commit(this.value);
    }
    this.check();
  }

  public forceChange() {
    this.check();
  }

  public registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  public notifyBlurEvent(event: FocusEvent) {
    this.blur.emit(event);
  }

  public notifyFocusEvent(event: FocusEvent) {
    this.focus.emit(event);
  }

  public check() {
  }
  protected commit(value: string): void {}
}
