/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * Date: 08/26/2023
 * Modified By: Patrick Cuauro
 * Description: Home component
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor() {
    
  }
  ngOnInit(): void {}
}
