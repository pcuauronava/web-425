/**
 * Title: composer.service.ts
 * Author: Professor Krasso
 * Date: 09/01/2023
 * Modified By: Patrick Cuauro
 * Description: Service for composer
 */
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
      this.composers = [
          {
              composerId: 100, fullName: "Ludwig van Beethoven", genre: "Classical"
          },
          {
              composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"
          },
          {
              composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
          },
          {
              composerId: 103, fullName: "Johannes Brahms", genre: "Classical"
          },
          {
              composerId: 104, fullName: "Joseph Haydn", genre: "Classical"
          },
          {
              composerId: 105, fullName: "Patrick Kavanaugh", genre: "Classical"
          },
          ]
  }
  getComposers(): Observable<IComposer[]> {
      return of(this.composers);
  }
  getComposer(composerId: number) : IComposer{
      // this extra code is to prevent the error: "Object is possibly 'undefined'."
      for (let composer of this.composers) {
          if (composer.composerId === composerId) {
              return composer;
          }
      }
      //this line is added to prevent the error: "Function lacks ending return statement and return type does not include 'undefined'."
      return {} as IComposer;
  }
  filterComposers(name: string) : Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}
