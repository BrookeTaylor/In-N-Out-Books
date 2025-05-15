/**
 * Title: Open Library Service
 * Author: Brooke Taylor
 * Revision: 5/15/25
 * Description: Open Library Service
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryService {

  constructor(private http: HttpClient) {}

  searchBooks(query: string): Observable<any[]> {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

    return this.http.get<any>(url).pipe(
      map(response => response.docs.slice(0, 5))
    );
  }
}
