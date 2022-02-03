/**
 * Custom validation static class for password
 * Using AbstractControl interface for creating custom validation
 */

import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  /**
   * Check if spaces exist in the password
   */
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      /** we could also return a complex object ex: { minlength :{ required:5, provided:control.value.length}} */
      return { cannotContainSpace: true };
    }

    return null;
  }
}
