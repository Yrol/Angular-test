import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.services';

@Injectable({
  providedIn: 'root',
})

/**
 * Inheriting the super class DataService
 */
export class PostsService extends DataService {
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}
