import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Visit' },
  ];

  countries = [
    { id: 1, name: 'UK' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'Australia' },
  ];

  /**
   * Log firstname field on touch
   * @param x
   */
  firstnameLog(x: any) {
    console.log(x);
  }

  /**
   *
   * @param values Handling form submission
   */
  onSubmit(values: any) {
    console.log(values);
  }
}
