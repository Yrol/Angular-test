import { AppErrorHandler } from './common/app-error-handler';
import { CoursesService } from './course.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { PanelComponent } from './panel/panel.component';
import { CoursesComponent } from './courses/courses.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsDynamicComponent } from './reactive-forms-dynamic/reactive-forms-dynamic.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavouriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    ReactiveFormsComponent,
    ReactiveFormsDynamicComponent,
    PostComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    /**
     * Adding the service to be used as a Dependency Injection.
     * Singleton: Only one instance of this service will be created and will use that across all other components when needed.
     */
    CoursesService,
    PostsService,

    //Replacing the in-built error handler class - 'ErrorHandler' with the custom error handler class - 'AppErrorHandler'
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
