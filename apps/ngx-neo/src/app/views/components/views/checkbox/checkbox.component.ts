import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';

interface DemoCheckboxForm {
  checkbox1?: FormControl<string | null>;
  checkbox2?: FormControl<string | null>;
}

@Component({
  selector: 'neo-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit{
  public form: FormGroup<DemoCheckboxForm>;

  constructor() {
  }

  public ngOnInit(): void {
    this.form = new FormGroup<DemoCheckboxForm>({
      checkbox1: new FormControl(null),
      checkbox2: new FormControl(null),
    });
  }
}
