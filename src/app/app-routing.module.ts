/*
============================================
; Title: Exercise 8.2 - Server-side Communications
; Author: Professor Krasso
; Date: 07/11/2023
; Modified By: Brooks
; Description: app-routing module
============================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
// Add an import statement for the WishlistComponent
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [

  // Add each components path to the routes array
  { path: '', component: BookListComponent },
  { path: 'book-list', component: BookListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  // Add a new route for the wishlist component
  { path: 'wishlist', component: WishlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
