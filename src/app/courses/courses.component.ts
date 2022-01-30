import { Component } from '@angular/core';
import { CoursesService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  title = 'Mathematics';
  courseCount = '34';
  courses = new Array();
  imageSrc = 'https://i.imgur.com/e32dxNq.png';
  colSpan = 2;
  isActive = true;
  disabled = true;
  inputField = 'Hello';
  emailAddress = 'me@me.com';
  course = {
    title: 'Computer science',
    rating: 4.545,
    students: 456798,
    price: 189.99,
    releaseDate: new Date(2022, 1, 23),
  };
  text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

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

  onSave() {
    alert('Save clicked');
  }

  onSaveWithEvent($event: Event) {
    alert('On save with event clicked. Check the console');
    console.log($event);
  }

  onPrint($event: Event) {
    $event.stopPropagation();
    alert('On print event');
  }

  divClickEvent($event: Event) {
    console.log('Div click event');
  }

  onKeyUpEventFiltering() {
    alert('Event with filtering');
  }

  //The Old JS way of handling
  onKeyUpEventWithoutEventFiltering($event: any) {
    if ($event.keyCode === 13) {
      alert('Without event filtering');
    }
  }

  templateVariable(email: string) {
    alert("You've entered: " + email);
  }

  withoutTemplateVariable($event: any) {
    alert("You've entered: " + $event.target.value);
  }

  onKeyUp2WayBinding() {
    alert('Email address entered: ' + this.emailAddress);
  }

  onAdd() {
    this.courses.push('course 4');
  }

  onRemove(courseIndex: number) {
    this.courses.splice(courseIndex, 1);
  }
}
