import { ResponsePageable } from './../../@core/interfaces/response-pageable.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() response: Observable<ResponsePageable<any>>;
  @Output() currentPage: EventEmitter<number> = new EventEmitter();
  @Output() currentSize: EventEmitter<number> = new EventEmitter();
  @Input() sizeOptions: Array<number> = new Array();
  content: Array<any> = new Array();
  empty: boolean;
  first: boolean;
  last: boolean;
  page: number;
  size: number;
  totalPages: number;
  indexes: Array<number> = new Array();

  constructor() { }

  ngOnInit() {
    this.response.subscribe(
      data => {
        this.content = data.content;
        this.empty = data.empty;
        this.first = data.first;
        this.last = data.last;
        this.page = data.number;
        this.totalPages = data.totalPages;
        this.size = data.size ? data.size : this.sizeOptions[0];
        this.indexes = this.buildIndexes();
      }
    );
  }

  firstPage(){
    this.page = 0;
    this.currentPage.emit(this.page);
  }

  lastPage(){
    this.page = this.totalPages - 1;
    this.currentPage.emit(this.page);
  }

  getCurrentPage(){
    return this.page;
  }

  setCurrentPage(page: number){
    this.page = page;
    this.currentPage.emit(this.page);
  }

  setCurrentSize(){
    this.currentSize.emit(this.size);
  }

  buildIndexes(){
    this.indexes = new Array<number>();
    if (this.first && this.last){
      this.indexes.push(this.page);
    }
    else if (this.first && !this.last){
      this.indexes.push(this.page);
      this.indexes.push(this.page + 1);
    }
    else if (!this.first && this.last){
      this.indexes.push(this.page - 1);
      this.indexes.push(this.page);
    }
    else if (!this.first && !this.last){
      this.indexes.push(this.page - 1);
      this.indexes.push(this.page);
      this.indexes.push(this.page + 1);
    }
    return this.indexes;
  }

}
