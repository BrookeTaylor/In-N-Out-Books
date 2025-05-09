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
// import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


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
  constructor(
    public dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { book: IBook }
  ) {
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
