/*
============================================
; Title: Exercise 8.2 - Server-side Communications
; Author: Professor Krasso
; Date: 07/11/2023
; Modified By: Brooks
; Description: book-list component
============================================
*/

import { Component, OnInit } from '@angular/core';

// Add an import statement for IBook interface
import { IBook } from '../book.interface';

// Add an import statement for Observable
import { Observable } from 'rxjs';

// Add an import statement for the BooksService
import { BooksService } from '../books.service';

// Add an import statement for the MatDialog
import { MatDialog } from '@angular/material/dialog';

// Add an import statement for the BookDetailsDialogComponent
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  // Convert the books variable to an array of IBook
  books: IBook[] = [];


  // Create a variable named book of type IBook
  book: IBook;

/**
 * Add the BooksService to the components constructor
 *
 * Add the MatDialog class to the components constructor
 */
  constructor(private booksService: BooksService, private dialog: MatDialog) {

    // In the constructors body subscribe the getBooks() function
    this.booksService.getBooks().subscribe(res => {

      console.log(res);

      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            });
          }

          this.books.push({
            isbn: res[key].details.isbn_13 ? res [key].details.isbn_13 : res [key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          });

        }
      }
    });


  }

  ngOnInit(): void {
  }


  // Create a function called showBookDetails(isbn: string)
  showBookDetails(isbn: string) {

    // Replace the code that calls the getBook(isbn) function with a find function
    this.book = this.books.find(book => book.isbn === isbn);


    // console.log() the book object (we are doing this to test that
    // the service is returning the correct book object)
    console.log(this.book);


    // create a dialogRef object and assign it to the dialog.open() function
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {


/**
 * In the body of the open() function create a new object literal
 * called data and a nested object literal called book and assign it
 * the book variable
 */
      data: { book: this.book },
      disableClose: true,
      width: '800px'

    });

    // Call the afterClosed() function and set the book variable to null
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });



  }

}
