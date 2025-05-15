/**
 * Title: Exercise 8.2 - Server-side Communications
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 7/11/23
 * Revision: 5/14/25
 * Description: IBook Interface
 */

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>
  description: string;
  numOfPages: number;
  coverUrl?: string;
}
