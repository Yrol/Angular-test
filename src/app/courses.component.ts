import { CoursesService } from './course.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  /**
   * Interpolation - using "{{}}" is known as string interpolation.
   */
  // template:
  //   '<h2>{{"Course category: " + getTitle() + "(" + courseCount + ")"}}</h2>',

  /**
   * using Directives.
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
  courses;

  /**
   *
   * @param coursesService
   * using CoursesService as DI.
   * Advantages:
   */
  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();

    //without DI (tightly couple). Disadvantages - cannot change at run time and also harder to do unit testing.
    // let coursesService = new CoursesService();
    // this.courses = coursesService.getCourses();
  }

  getTitle() {
    return this.title;
  }
}
