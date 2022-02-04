import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, catchError, retry } from 'rxjs/operators';
import { NotFoundError } from '../common/not-found-error';
import { throwError } from 'rxjs';
import { BadInputError } from './../common/bad-input';
import { AppError } from './../common/app-error';

/**
 * Reusable class which consist of generic requests GET, POST, PATCH & UPDATE.
 * For instance, the class has been inherited by PostsService
 */

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  createPost(postData: any) {
    return this.http.post(this.url, JSON.stringify(postData)).pipe(
      // catchError((error: Response) => {
      //   if (error.status === 400) {
      //     return throwError(() => new BadInputError(error.json()));
      //   }
      //   return throwError(() => new AppError(error));
      // })
      catchError(this.handleError)
    );
  }

  updatePost(postId: string, postData: any) {
    return this.http
      .patch(`${this.url}/${postId}`, JSON.stringify(postData))
      .pipe(
        // catchError((error: Response) => {
        //   if (error.status === 400) {
        //     return throwError(() => new BadInputError(error.json()));
        //   }
        //   return throwError(() => new AppError(error));
        // })
        catchError(this.handleError)
      );
  }

  //delete with error handling
  deletePost(postId: string) {
    console.log(postId);
    return this.http.delete(`${this.url}/${postId}`).pipe(
      // catchError((error: Response) => {
      //   if (error.status === 404) {
      //     return throwError(() => new NotFoundError());
      //   }
      //   return throwError(() => new AppError(error));
      // })
      retry(3), //retry maximum of 3 times if fail
      catchError(this.handleError)
    );
  }

  //generic error handler method
  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(() => new BadInputError(error.json()));
    }

    if (error.status === 404) {
      return throwError(() => new NotFoundError());
    }

    return throwError(() => new AppError(error));
  }
}
