/*
============================================
; Title: Exercise 8.2 - Server-side Communications
; Author: Professor Krasso
; Date: 07/11/2023
; Modified By: Brooks
; Description: app component
============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Create a new variable and name it assignment
  assignment: string;

  constructor() {

    // In the components constructor assign the assignment variable
    // Change the assignment variable’s value to ‘Welcome to In-N-Out-Books”
    this.assignment = "Welcome to In-N-Out-Books";

  }

}
