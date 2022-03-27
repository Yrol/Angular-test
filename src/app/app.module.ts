import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FollowersComponent } from './followers/followers.component';
import { HomeComponent } from './home/home.component';
import { AppErrorHandler } from './common/app-error-handler';
import { CoursesService } from './services/course.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

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
import { ProfileComponent } from './profile/profile.component';

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
    NavigationComponent,
    HomeComponent,
    FollowersComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,

    /**
     * Routes
     * forRoot static method for defining the root routed. For child routes we use "forChild()"
     * Order of the routes is important. Ex: if we place the wildcard (**) Not found route at the beginning, it'll show that all the time.
     */
    RouterModule.forRoot([{ path: '', component: HomeComponent }]),
    RouterModule.forRoot([
      { path: 'followers/:userId/:username', component: ProfileComponent },
    ]),
    RouterModule.forRoot([
      { path: 'followers', component: FollowersComponent },
    ]),
    RouterModule.forRoot([
      { path: 'posts', component: PostComponentComponent },
    ]),

    //using the wildcard to signify anything not within teh specified routes will be directed to this page
    RouterModule.forRoot([{ path: '**', component: NotFoundComponent }]),
  ],
  entryComponents: [],
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
