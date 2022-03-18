import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { TableService } from '../shared/table.service';

export interface PeriodicElement {
  select: boolean;
  item: string;
  qtd: number;
  valor: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {select: false, item: 'qualquercoisa', qtd: 7, valor: 5},
  {select: false, item: 'qualquercoisa', qtd: 7, valor: 5}
];

@Component({ 
  selector: 'app-table-check',
  templateUrl: './table-check.component.html',
  styleUrls: ['./table-check.component.css'],
  preserveWhitespaces: true
})
export class TableCheckComponent implements OnInit {

  displayedColumns: string[] = ['select','item', 'qtd', 'valor'];
  dataSource = this.dataTable.ELEMENT_DATA
  selection = new SelectionModel<PeriodicElement>(true, []);
 
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.length;
  //   return numSelected === numRows;
  // }

  // /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: PeriodicElement): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.item + 1}`;
  // }

  constructor(public dataTable: TableService) { }

  ngOnInit(): void {
  }

}
