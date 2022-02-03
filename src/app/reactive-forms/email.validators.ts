/**
 * Custom async validator for validation email
 * Using AbstractControl interface for creating custom validation
 * Simulating a server connection using asynchronous operation for checking an unique email
 */

import { AbstractControl, ValidationErrors } from '@angular/forms';

export class emailValidators {
  /**
   * Checking for unique email validation (assuming it connects to server).
   */
  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'me@me.com') {
          resolve({ shouldBeUnique: true });
        } else {
          // using else condition since we're not using resolve instead of return
          resolve(null);
        }
      }, 3000);
    });
  }
}
