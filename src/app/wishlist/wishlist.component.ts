/**
 * Title: Exercise 8.2 – Server-side Communications
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 7/11/23
 * Revision: 5/15/25
 * Description: Wishlist Component
 */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  standalone: false,
  animations: [
  trigger('slideInOut', [
    transition(':enter', [
      style({ transform: 'translateX(100%)', opacity: 0 }),
      animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
    ]),
    transition(':leave', [
      animate('300ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
    ])
  ])
]

})
export class WishlistComponent implements OnInit {
  items: IWishlistItem[] = [];
  openSidebar = false;


  ngOnInit(): void {
    const stored = localStorage.getItem('wishlist');
    if (stored) {
      this.items = JSON.parse(stored);
    }
  }

  updateItemsHandler(item: IWishlistItem | IWishlistItem[]): void {
    if (Array.isArray(item)) {
      this.items.push(...item);
    } else {
      this.items.push(item);
    }

    this.saveToLocalStorage();
  }

  clearWishlist(): void {
    this.items = [];
    localStorage.removeItem('wishlist');
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('wishlist', JSON.stringify(this.items));
  }
}
