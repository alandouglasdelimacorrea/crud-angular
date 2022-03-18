import { Injectable } from '@angular/core';

export interface PeriodicElement {
  item: string;
  qtd: number;
 }


@Injectable({
  providedIn: 'root'
})
export class TableService {
  
  ELEMENT_DATA: PeriodicElement[] = [
  
  ];



  constructor() { }
}
