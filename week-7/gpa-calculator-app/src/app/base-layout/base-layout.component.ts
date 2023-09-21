/**
 * Title: base-layout.component.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 09/20/2023
 * Description: Base layout component (base page)
 */

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit{
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    //cookieService manages the cookies for the application
    this.assignment = 'GPA Calculator';
  }
  ngOnInit(): void {
  }
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
    //this redirects the user to the sign-in page
  }
}
