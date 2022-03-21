import { Injectable } from '@angular/core';
import { PeriodicElement } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  ELEMENT_DATA: PeriodicElement[] = [

  ];
  
  constructor() { }
}
