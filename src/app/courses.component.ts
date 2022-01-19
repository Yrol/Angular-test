import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  /**
   * Interpolation - using "{{}}" is known as string interpolation.
   */
  // template:
  //   '<h2>{{"Course category: " + getTitle() + "(" + courseCount + ")"}}</h2>',

  /**
   * using Directives
   */
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `,
})
export class CoursesComponent {
  title = 'Mathematics';
  courseCount = '34';
  courses = ['courses1', 'courses2', 'courses3'];

  getTitle() {
    return this.title;
  }
}
