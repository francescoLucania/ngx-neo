import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'base-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  // @ts-ignore
  public form: FormGroup<UntypedFormGroup>;

  public ngOnInit(): void {
    // @ts-ignore
    this.form = new FormGroup<UntypedFormGroup>({
      radio: new FormControl('', {
        validators: Validators.required,
      }),
    });
  }

  public submit() {
    console.log('submit');
  }
}
