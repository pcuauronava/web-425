/**
 * Title: app.component.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 09/07/2023
 * Description: App component
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;
  constructor() {
  this.assignment = 'Exercise 5.4 - Dialogs';
  }
}
