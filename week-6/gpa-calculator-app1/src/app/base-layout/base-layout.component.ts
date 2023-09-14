/**
 * Title: base-layout.component.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 09/13/2023
 * Description: Base layout component (base page)
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit{
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts';
  }
  ngOnInit(): void {
  }
}
