import {
  FormArray,
  FormGroup,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reactive-forms-dynamic',
  templateUrl: './reactive-forms-dynamic.component.html',
  styleUrls: ['./reactive-forms-dynamic.component.css'],
})
export class ReactiveFormsDynamicComponent {
  form = new FormGroup({
    /**
     * FormArray - contains array of form objects
     * The 1st argument - the array will hold the topics
     */
    topics: new FormArray([]),
  });

  addTopic(topic: HTMLInputElement) {
    /**
     * Passing FormControl to push method. We could also pass FormGroup if required (anything belongs to the AbstractControl class).
     */
    //(this.topics as FormArray).push(new FormControl(topic.value));
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: AbstractControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
