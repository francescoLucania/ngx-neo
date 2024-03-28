import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RadioStandaloneComponent } from 'ngx-neo-ui';
import { CodeComponent } from '../../../../components/code/code.component';

interface DemoRadioForm {
  radio: FormControl<string | null>;
}

@Component({
  selector: 'neo-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  imports: [ReactiveFormsModule, CodeComponent, RadioStandaloneComponent],
  standalone: true,
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
