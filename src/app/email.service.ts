import { Injectable } from '@angular/core';

/**
 * Injectable is decorator that is used when we're injecting other classes to this class in the constructor.
 * ex: constructor(tags: Tags, message: Message) {}
 */
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}
}
