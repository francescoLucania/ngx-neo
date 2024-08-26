import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AlertService } from '../../../../services/alert.service';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import {
  ButtonStandaloneComponent,
  InputStandaloneComponent,
  OpenModalTemplateRefDirective,
  RadioStandaloneComponent,
} from 'ngx-neo-ui';
import { ElementFocusDirective } from 'ngx-neo-ui';

interface DemoLoginForm {
  login: FormControl<string>;
  password: FormControl<string>;
  scenario: FormControl<
    null | 'captcha' | 'sms' | 'login-error' | 'password-error'
  >;
}

interface CaptchaForm {
  code: FormControl<string>;
}

@Component({
  selector: 'neo-login-a11y',
  templateUrl: './login-a11y.component.html',
  styleUrls: ['./login-a11y.component.scss'],
  standalone: true,
  imports: [
    NgSwitch,
    ReactiveFormsModule,
    NgSwitchCase,
    InputStandaloneComponent,
    RadioStandaloneComponent,
    ButtonStandaloneComponent,
    OpenModalTemplateRefDirective,
    NgIf,
    ElementFocusDirective,
  ],
})
export class LoginA11yComponent implements OnInit {
  @ViewChild('loginInput', { static: false })
  private loginInput: InputStandaloneComponent;
  @ViewChild('passwordInput', { static: false })
  private passwordInput: InputStandaloneComponent;

  public get loginControl() {
    return this.form.get('login');
  }

  public state: 'login' | 'captcha' | 'error' = 'login';
  public form: FormGroup<DemoLoginForm>;
  public captchaForm: FormGroup<CaptchaForm>;

  constructor(private alertService: AlertService) {}

  public ngOnInit(): void {
    this.form = new FormGroup<DemoLoginForm>({
      login: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      scenario: new FormControl(null, {
        nonNullable: true,
        validators: Validators.required,
      }),
    });

    this.form.valueChanges.subscribe(() => {
      if (this.form.errors) {
        this.form.setErrors(null);
      }
    });

    this.captchaForm = new FormGroup<CaptchaForm>({
      code: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }
    switch (this.form.get('scenario')?.value) {
      case 'login-error':
        this.alertService.setAlert = 'Неверный логин или пароль';
        this.loginControl?.setErrors({ error: true });
        this.loginInput.returnFocus();
        break;
      case 'captcha':
        this.state = 'captcha';
        break;
    }
  }
}
