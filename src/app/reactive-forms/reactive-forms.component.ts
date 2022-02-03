import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailValidators } from './email.validators';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  /**
   * Adding the form groups and form control objects in the code
   * FormControl - 1st argument is the initial value of the input
   * PasswordValidators - custom validation class created to check if spaces exist in the password
   * emailValidators - A custom async validator passed as the 3rd parameter compared to other validators (both inbuilt and custom)
   */
  form = new FormGroup({
    email: new FormControl(
      '',
      [Validators.required, Validators.email],
      [emailValidators.shouldBeUnique]
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      PasswordValidators.cannotContainSpace,
    ]),

    //group of controls
    account: new FormGroup({
      accountName: new FormControl('Australia'),
      accountType: new FormControl(),
    }),
  });

  get emailInput() {
    return this.form.get('email');
  }

  get passwordInput() {
    return this.form.get('password');
  }

  get accountName() {
    return this.form.get('account.accountName');
  }

  get accountType() {
    return this.form.get('account.accountType');
  }

  emailLog(log: any) {
    console.log(log);
  }

  passwordLog(log: any) {
    console.log(log);
  }

  onSubmit() {
    //raising errors at form level
    this.form.setErrors({
      invalidLogin: true,
    });

    //raising at individual control level
    // this.email?.setErrors({

    // })

    // this.password?.setErrors({

    // })
  }
}
