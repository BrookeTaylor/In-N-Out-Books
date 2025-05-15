/**
 * Title: Exercise 8.2 – Server-side Communications
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 7/11/23
 * Revision: 5/15/25
 * Description: App Module
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BookListComponent } from './book-list/book-list.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



// Add import statements
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BookDetailsDialogComponent } from './book-details-dialog/book-details-dialog.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistCreateComponent } from './wishlist-create/wishlist-create.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [
        AppComponent,
        AboutComponent,
        ContactComponent,
        BookListComponent,
        BookDetailsDialogComponent,
        WishlistComponent,
        WishlistCreateComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatTableModule,
        MatDialogModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }

