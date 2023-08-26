/**
 * Title: signin.component.ts
 * Author: Professor Krasso
 * Date: 08/25/2023
 * Modified By: Patrick Cuauro
 * Description: Signin component
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import activates the data routing functionality

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements  OnInit{

  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  signin(){
    this.isLoggedIn = true;

    this.router.navigate(['/home'], { queryParams: { isLoggedIn: this.isLoggedIn}, skipLocationChange: true});
    // this line of code provides the login functionality
  } 
  
}
