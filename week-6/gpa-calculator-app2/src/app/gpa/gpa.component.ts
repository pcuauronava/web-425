/**
 * Title: gpa.component.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 09/16/2023
 * Description: GPA component (GPA Calculator)
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal: number;

  constructor() {}
  ngOnInit(): void {
    
  }
}
