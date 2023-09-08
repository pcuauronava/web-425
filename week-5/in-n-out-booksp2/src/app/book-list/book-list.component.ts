/**
 * Title: book-list.component.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 09/07/2023
 * Description: Book list component (book-list.component.ts)
 */
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  books: Observable<IBook[]>;

  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor(private BooksService: BooksService) {
    this.books = this.BooksService.getBooks();
   }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) {
    this.book = this.BooksService.getBook(isbn);
    console.log(this.book);
  }
  
}
