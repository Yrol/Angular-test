import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  //using "{{}}" is known as string interpolation.
  template:
    '<h2>{{"Course category: " + getTitle() + "(" + courseCount + ")"}}</h2>',
})
export class CoursesComponent {
  title = 'Mathematics';
  courseCount = '34';

  getTitle() {
    return this.title;
  }
}
