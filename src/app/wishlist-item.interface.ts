/**
 * Title: Exercise 8.2 - Server-side Communications
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 7/11/23
 * Revision: 5/9/25
 * Description: Wishlist Item Interface
 */

// Name the interface IWishlistItem
export interface IWishlistItem {

  // Give the interface the following properties
  title: string;
  authors: string;
  coverUrl?: string;
}
