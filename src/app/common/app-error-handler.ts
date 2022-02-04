/**
 * Global app error handler class for handling error.
 * In real world this class can be used for logging the error in the server, showing a toast message & etc.
 */

import { AppError } from './app-error';
import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error: AppError): void {
    console.log(error.originalError);
    alert('An unexpected error occurred');
  }
}
