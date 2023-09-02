/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 09/01/2023
 * Modified by: Patrick Cuauro
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 4.4 - Async Pipe';
}
