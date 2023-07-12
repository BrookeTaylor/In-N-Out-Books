/*
============================================
; Title: Exercise 8.2 - Server-side Communications
; Author: Professor Krasso
; Date: 07/11/2023
; Modified By: Brooks
; Description: books service
============================================
*/

import { Injectable } from '@angular/core';

// Import the Observable class from rxjs and of
import { Observable, of } from 'rxjs';

// Import the map operator from rxjs
import { map } from 'rxjs/operators';

// Import the IBook interface
import { IBook } from './book.interface';

// Add an import statement for the HttpClient and HttpParams
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // Add a new variable named isbns of type string array
  // and fill it with the following values
  isbns: string[] = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ]


  // In the services constructor add the HttpClient
  constructor(private http: HttpClient) {


  }


  // Create two new functions: getBooks() and getBook(isbn: string)

  // Set the return type to an Observable Array of IBook objects
  getBooks() {

    // Create a new variable named params of type HttpParams
    let params = new HttpParams();

    // bibkeys, isbns (use the join function to convert the array of isbns to a comma delimited string)
    params = params.append('bibkeys', this.isbns.join(','));
    // format, json
    params = params.append('format', 'json');
    // jscmd, details
    params = params.append('jscmd', 'details');


    // return the http.get function passing in the openlibrary url and the params object
    return this.http.get('https://openlibrary.org/api/books', {

      params: params

    });

  }






}
