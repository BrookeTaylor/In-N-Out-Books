/*
============================================
; Title: Exercise 8.2 - Server-side Communications
; Author: Professor Krasso
; Date: 07/11/2023
; Modified By: Brooks
; Description: app module
============================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BookListComponent } from './book-list/book-list.component';


// Add import statements
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

// Add an import statement for MatTableModule
import { MatTableModule } from '@angular/material/table';
import { BookDetailsDialogComponent } from './book-details-dialog/book-details-dialog.component';

// Add an import statement for the MatDialogModule
import { MatDialogModule } from '@angular/material/dialog';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistCreateComponent } from './wishlist-create/wishlist-create.component';

// add import statements for FormsModule, MatFormFieldModule, and MatInputModule
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Import the HttpClientModule and MatProgressSpinnerModule
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    BookListComponent,
    BookDetailsDialogComponent,
    WishlistComponent,
    WishlistCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Add the imported modules to the imports array
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    // Add the MatTableModule to the imports array
    MatTableModule,
    // Add the MatDialogModule to the imports array
    MatDialogModule,
    // Update our imports array.
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    // Add the modules to the imports array
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
