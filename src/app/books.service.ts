/**
 * Title: Exercise 8.2 - Server-side Communications
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 7/11/23
 * Revision: 5/9/25
 * Description: Books Service
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


  isbns: string[] = [
    '1942788002',
    '0998296600',
    '180056418X',
    '0060198605',
    '0060556196',
    '076791404X',
    '0812967941',
    '0061122416',
    '1590302486'
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
