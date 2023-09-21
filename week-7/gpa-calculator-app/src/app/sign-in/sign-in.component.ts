/**
 * Title: sign-in.component.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 09/20/2021
 * Description: sign-in component
 */

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements  OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {
    console.log(this.cookieService.get('session_user'));
    // this is to show the user logged in (7.3)
   }
 
  ngOnInit(): void {
   this.signinForm = this.fb.group({
    //fb stands for form builder
    studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    //this is how we validate the student ID
    //the previous code would create a form control that is required to contain only numbers
   });
 }

 get form () { return this.signinForm.controls; }

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
