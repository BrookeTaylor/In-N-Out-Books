/*
============================================
; Title: Exercise 8.2 - Server-side Communications
; Author: Professor Krasso
; Date: 07/11/2023
; Modified By: Brooks
; Description: book-details-dialog component
============================================
*/


import { Component, OnInit } from '@angular/core';

// Add an import statement for MAT_DIALOG_DATA and MatDialogRef
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// Add an import statement for Inject
import { Inject } from '@angular/core';

// Add an import statement for IBook
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {

  // Add a variable named book of type IBook
  book: IBook;

  // Add the MatDialogRef and MAT_DIALOG_DATA to the components constructor
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {

    // In the components constructor map the data.book value to the book variable
    this.book = data.book;

  }

  ngOnInit(): void {
  }

}
