/**
 * Title: home.component.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 09/20/2023
 * Description: Home component
 */
import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit {
  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D','D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;

  transcriptForm: FormGroup;
  //added for the assignment 7.3

  constructor(private fb: FormBuilder) {
    this.transcriptEntry = {} as ITranscript;
  }
  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course: ['', Validators.required],
      grade: ['', Validators.required],
    });
    //added for the assignment 7.3 this makes the form more reactive
  }


  get form() {
    return this.transcriptForm.controls;
  }
  //added for the assignment 7.3

  onSubmit(event) {
    this.transcriptEntries.push({
      course: this.form['course'].value,
      grade: this.form['grade'].value
      //filled with the format
    });

    event.currentTarget.reset();
    //added for the assignment 7.3
    }
  
  calculateResults() {
    let gpa: number = 0;
    for (let entry of this.transcriptEntries) {
      console.log(entry.grade);
      switch (entry.grade) {
        case 'A':
          console.log('its an A');
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.0;
          break;
        case 'B-':
          gpa += 2.7;
          break;
        case 'C+':
          gpa += 2.3;
          break;
        case 'C':
          gpa += 2.0;
          break;
        case 'C-':
          gpa += 1.7;
          break;
        case 'D+':
          gpa += 1.3;
          break;
        case 'D':
          gpa += 1.0;
          break;
        case 'D-':
          gpa += 0.7;
          break;
        case 'F':
          gpa += 0.0;
          break;
      }
    }
    console.log(gpa);
    this.gpaTotal = gpa / this.transcriptEntries.length;
    console.log(this.gpaTotal);
  }
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
