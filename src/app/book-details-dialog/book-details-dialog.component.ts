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
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
    selector: 'app-book-details-dialog',
    templateUrl: './book-details-dialog.component.html',
    styleUrls: ['./book-details-dialog.component.scss'],
    standalone: false
})
export class BookDetailsDialogComponent implements OnInit {

  copied = false;

  // Add a variable named book of type IBook
  book: IBook;

  // Add the MatDialogRef and MAT_DIALOG_DATA to the components constructor
  constructor(
    public dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { book: IBook },
    private clipboard: Clipboard
  ) {
    this.book = data.book;
  }
    copyISBN() {
    this.clipboard.copy(this.book.isbn);
    this.copied = true;
    setTimeout(() => this.copied = false, 2000);
  }

  ngOnInit(): void {
  }

}
