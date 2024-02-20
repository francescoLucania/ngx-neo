import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface DemoLoginForm {
  login: FormControl<string>;
  password?: FormControl<string>;
}

@Component({
  selector: 'neo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  public get login(): AbstractControl<string> {
    return this.form?.get('login') as AbstractControl<string>;
  }
  public get password(): AbstractControl {
    return this.form?.get('password') as AbstractControl<string>;
  }

  public form: FormGroup<DemoLoginForm>;

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
    });
  }

  public submit(): void {
    alert('Hello World!');
  }
}
