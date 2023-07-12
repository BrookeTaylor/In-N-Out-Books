/*
============================================
; Title: Exercise 8.2 - Server-side Communications
; Author: Professor Krasso
; Date: 07/11/2023
; Modified By: Brooks
; Description: IBook interface
============================================
*/

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>
  description: string;
  numOfPages: number;
}
