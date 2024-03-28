import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ButtonStandaloneComponent,
  InputStandaloneComponent,
} from '@lib/ngx-neo-ui';
import { MaskitoDirective } from '@maskito/angular';
import { maskitoPhoneOptionsGenerator } from '@maskito/phone';
import { MASKITO_DEFAULT_OPTIONS } from '@maskito/core';
import { CodeComponent } from '../../../../components/code/code.component';

interface DemoLoginForm {
  login: FormControl<string>;
  password?: FormControl<string>;
}

@Component({
  selector: 'neo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [
    ButtonStandaloneComponent,
    InputStandaloneComponent,
    ReactiveFormsModule,
    MaskitoDirective,
    CodeComponent,
  ],
  standalone: true,
})
export class InputComponent implements OnInit {
  public get login(): AbstractControl<string> {
    return this.form?.get('login') as AbstractControl<string>;
  }
  public get password(): AbstractControl {
    return this.form?.get('password') as AbstractControl<string>;
  }

  public form: FormGroup<DemoLoginForm>;

  protected phoneMask = MASKITO_DEFAULT_OPTIONS;

  public async ngOnInit(): Promise<void> {
    this.form = new FormGroup<DemoLoginForm>({
      login: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
    });

    this.phoneMask = maskitoPhoneOptionsGenerator({
      countryIsoCode: 'RU',
      metadata: await import('libphonenumber-js/min/metadata').then(
        (m) => m.default
      ),
    });
  }

  public submit(): void {
    alert('Hello World!');
  }
}
