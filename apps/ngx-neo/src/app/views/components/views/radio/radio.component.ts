import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';

interface DemoRadioForm {
  radio: FormControl<string | null>;
}

@Component({
  selector: 'neo-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  public form: FormGroup<DemoRadioForm>;

  public ngOnInit(): void {
    this.form = new FormGroup<DemoRadioForm>({
      radio: new FormControl(''),
    });
  }

  public submit() {
    console.log('submit');
  }
}
