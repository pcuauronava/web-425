/**
 * Title: my-details.component.ts
 * Author: Professor Krasso
 * Date: 08/23/2023
 * Modified By: Patrick Cuauro
 * Description: My details component
 */
import { Component, OnInit } from '@angular/core';

// new class
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ];

constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
  this.fullName = fullName;
  this.favoriteFood = favoriteFood;
  this.favoriteColor = favoriteColor;
  }

  toString() {
    console.log(`\n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite color: ${this.favoriteColor}`);
    }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
// Modified class
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Patrick Cuauro", "Sushi", "Red");
    this.myProfile.toString();
    // This makes the console.log statement in the Person class work
  }

ngOnInit(): void {
  }
}