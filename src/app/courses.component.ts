import { CoursesService } from './course.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <!-- Using "{{}}" is known as String Interpolation -->
    <h2>{{ title }}</h2>

    <!-- Using Directives -->
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>

    <!-- Using property binding (changing the properties of a DOM element in HTML) -->
    <img [src]="imageSrc" />

    <!--
      Using property binding when DOM element is not found / when there's no 1 to 1 mapping with the DOM elements and HTML.
      In this case we need to use "attr."
    -->
    <table>
      <tr>
        <td [attr.colspan]="colSpan">Sum: $180</td>
      </tr>
    </table>

    <!-- Adding a bootstrap button -->
    <div class="reg-div"><button class="btn btn-primary">Save</button></div>

    <!-- Class binding -->
    <div class="reg-div">
      <button class="btn btn-secondary" [class.active]="isActive">Close</button>
    </div>
  `,
})
export class CoursesComponent {
  title = 'Mathematics';
  courseCount = '34';
  courses;
  imageSrc = 'https://i.imgur.com/e32dxNq.png';
  colSpan = 2;
  isActive = true;

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
