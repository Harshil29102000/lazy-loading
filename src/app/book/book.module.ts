import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { CreateBookComponent } from '../book/create-book/create-book.component';
import { ListBookComponent } from '../book/list-book/list-book.component';
import { ViewBookComponent } from '../book/view-book/view-book.component';


@NgModule({
  declarations: [
    ListBookComponent,
    CreateBookComponent,
    ViewBookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
