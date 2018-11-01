import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../models/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input()
  question: QuestionBase<any>;
  @Input()
  form: FormGroup;
  @Input()
  divMostVisible: any;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
