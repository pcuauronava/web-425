/**
 * Title: composer.class.ts
 * Author: Professor Krasso
 * Date: 08/22/2023
 * Description: Class file for the Composer object
 */
import { IComposer } from "./composer.interface";
export class Composer {
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
    getComposers() {
        return this.composers;
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
  }