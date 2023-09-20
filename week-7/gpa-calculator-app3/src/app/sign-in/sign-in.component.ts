/**
 * Title: sign-in.component.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 09/19/2021
 * Description: sign-in component
 */

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements  OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }
 ngOnInit(): void {
   this.signinForm = this.fb.group({
    //fb stands for form builder
    studentId: ''
   });
 }
 onSubmit() {
  const formValues = this.signinForm.value;
  //this is how we capture the values of the form
  const studentId = parseInt(formValues.studentId);

    if(this.signinService.validate(studentId)) {

      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
      //this is how we navigate to the home page
     } else {
        this.errorMessage = 'The student ID you entered is invalid, please try again.';
        //this is in case the user enters an invalid student ID
    }
 }
}
