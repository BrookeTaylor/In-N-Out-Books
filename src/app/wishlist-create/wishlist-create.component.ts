/**
 * Title: Exercise 4.3 – Handling Form Events with Observables
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 7/11/23
 * Revision: 5/15/25
 * Description: Wishlist Create Component
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';
import { OpenLibraryService } from '../services/open-library.service';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss'],
  standalone: false
})
export class WishlistCreateComponent implements OnInit {
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  searchTerm = '';
  results: IWishlistItem[] = [];

  constructor(private openLibraryService: OpenLibraryService) {}

  ngOnInit(): void {}

  loading = false;

  searchBooks() {
    if (!this.searchTerm.trim()) return;

    this.openLibraryService.searchBooks(this.searchTerm).subscribe((data) => {
      this.results = data.map(book => ({
        title: book.title,
        authors: book.author_name?.join(', ') || 'Unknown',
        coverUrl: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : 'assets/placeholder.png'
      }));
    });
  }

  addToWishlist(item: IWishlistItem) {
    this.addItemEmitter.emit(item);
  }

  onImageError(event: Event): void {
  (event.target as HTMLImageElement).src = 'assets/placeholder.png';
}

}
