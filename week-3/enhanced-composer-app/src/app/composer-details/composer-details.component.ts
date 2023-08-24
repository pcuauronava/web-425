/**
 * Title: composer-details.component.ts
 * Author: Professor Krasso
 * Date: 08/22/2023
 * Description: Composer details component (composer details page)
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
import { ActivatedRoute } from '@angular/router';
//important


@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})

export class ComposerDetailsComponent implements OnInit{

  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);
    //There is a problem with the code above if you are using a version of TypeScript 4.5 or higher
      //https://jasonwatmore.com/post/2022/11/10/angular-fix-for-argument-of-type-string-null-is-not-assignable-to-parameter-of-type-string
      //TypeScript version in tsconfig.json strict: must be changed to false

    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId);
    }
  }
  ngOnInit(): void {
    
  }
}
