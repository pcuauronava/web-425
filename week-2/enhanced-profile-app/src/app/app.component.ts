/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: Aug 16 2023
 * Description: App component
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true;
  // this variable is used to display the assignment name in the header
  // if the value is changed here
  assignment: string = "Exercise 2.3 - Data Binding";
}
