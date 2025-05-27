/**
 * Title: Exercise 8.2 – Server-side Communications
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 7/11/23
 * Revision: 5/26/25
 * Description: App Component
 */

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {

  // Create a new variable and name it assignment
  assignment: string;

  isSmallScreen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {

    // In the components constructor assign the assignment variable
    // Change the assignment variable’s value to ‘Welcome to In-N-Out-Books”
    this.assignment = "Welcome to In-N-Out-Books";


    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });

  }

}
