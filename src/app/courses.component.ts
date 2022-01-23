import { CoursesService } from './course.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <!-- String Interpolation - Using "{{}}"-->
    <h2>{{ title }}</h2>

    <!--
      Directives (built-in)
      Using "ng" for modifying the DOM
      Like "ngFor" there are many other like "ngIf" & etc
    -->
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>

    <!-- Property Binding - (changing the properties of a DOM element in HTML) -->
    <div class="reg-div">
      <h4>Property Binding</h4>
      <div><input [value]="inputField" /></div>
      <div><img [src]="imageSrc" /></div>
    </div>

    <!--
      Attribute Binding - using attribute binding when DOM element is not found / when there's no 1 to 1 mapping with the DOM elements and HTML.
      In this case we need to use "attr."
    -->
    <div class="reg-div">
      <h4>Attribute Binding</h4>
      <table>
        <tr>
          <td [attr.colspan]="colSpan">Sum: $180</td>
        </tr>
      </table>
    </div>

    <!-- Adding a bootstrap button -->
    <div class="reg-div">
      <h4>Adding a bootstrap button</h4>
      <button class="btn btn-primary">Save</button>
    </div>

    <!-- Class binding -->
    <div class="reg-div">
      <h4>Class Binding</h4>
      <button class="btn btn-secondary" [class.active]="isActive">Close</button>
    </div>

    <!-- Style binding. Supports all the Style DOM objects documented here: https://www.w3schools.com/jsref/dom_obj_style.asp -->
    <div class="reg-div">
      <h4>Style Binding</h4>
      <button
        class="btn btn-secondary"
        [style.backgroundColor]="isActive ? '#33BEFF' : '#E3CD16'"
      >
        Deactivate
      </button>
    </div>

    <!-- Event binding: ex:1 -->
    <div class="reg-div">
      <h4>Event Binding</h4>
      <button
        (click)="onSave()"
        class="btn btn-secondary"
        [style.backgroundColor]="'#9F1462'"
      >
        Save
      </button>
    </div>

    <!-- Event binding: ex:2 - with DOM events such as X, Y position, keyup & etc. More: https://www.w3schools.com/jsref/dom_obj_event.asp  -->
    <div class="reg-div">
      <button
        (click)="onSaveWithEvent($event)"
        class="btn btn-secondary"
        [style.backgroundColor]="'#9F1462'"
      >
        Save (With DOM event)
      </button>
    </div>

    <!--
      Event binding: ex:2 - prevent event bubble (i.e. stop calling the events up the hierarchy if available)
      In this only the onSaveWithEvent will be triggered since "stopPropagation" is used
    -->
    <div class="reg-div" (click)="divClickEvent($event)">
      <button
        (click)="onPrint($event)"
        class="btn btn-secondary"
        [style.backgroundColor]="'#0C8A14'"
      >
        Print (with stopPropagation)
      </button>
    </div>

    <!-- Event filtering -->
    <div class="reg-div">
      <h4>Event filtering</h4>
      Event filtering: <input (keyup.enter)="onKeyUpEventFiltering()" />
    </div>

    <!-- Without event filtering (the old JS way) -->
    <div class="reg-div">
      Without event filtering:
      <input (keyup)="onKeyUpEventWithoutEventFiltering($event)" />
    </div>

    <!-- Template variable -->
    <div class="reg-div">
      <h4>Template variable</h4>
      Template Variable (hit enter):
      <input #email (keyup.enter)="templateVariable(email.value)" />
    </div>

    <!-- Without Template variable -->
    <div class="reg-div">
      Without Template Variable (hit enter):
      <input (keyup.enter)="withoutTemplateVariable($event)" />
    </div>

    <!--
      Two way binding - using ngModel
      Communicate between component and view on both directions (as opposed to property binding which is only component to view communication only)
    -->
    <div class="reg-div">
      <h4>Two-way Binding</h4>
      <input [(ngModel)]="emailAddress" (keyup.enter)="onKeyUp2WayBinding()" />
    </div>

    <!--
      Pipes - used for formatting the display of Strings, currency and etc. Ex: display a string in all capital letters
      In this example we change - uppercase, decimal points, number format, currency and date format
    -->
    <div class="reg-div">
      <h4>Pipes</h4>
      <div>
        {{ course.title | uppercase }} <br />
        {{ course.rating | number: '1.2-2' }} <br />
        {{ course.students | number }} <br />
        {{ course.price | currency: 'AUD' }} <br />
        {{ course.releaseDate | date: 'shortDate' }} <br />
      </div>
    </div>

    <!-- Custom pipes -->
    <div class="reg-div">
      <h4>Custom Pipes</h4>
      {{ text | summary: 65 }}
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
}
