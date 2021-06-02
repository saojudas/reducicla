import { Pageable } from './pageable.interface';

export interface ResponsePageable<T>{
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
  pageable: Pageable;
  content: Array<T>;
}
