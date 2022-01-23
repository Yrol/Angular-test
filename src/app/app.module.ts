import { CoursesService } from './course.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [AppComponent, CoursesComponent, CourseComponent, SummaryPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    /**
     * Adding the service to be used as a Dependency Injection.
     * Singleton: Only one instance of this service will be created and will use that across all other components when needed.
     */
    CoursesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
