import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatTable } from '@angular/material/table';
 
export interface PeriodicElement {
 item: string;
 qtd: number;
}
 
const ELEMENT_DATA: PeriodicElement[] = [
 
];
 
@Component({
 selector: 'app-table',
 templateUrl: './table.component.html',
 styleUrls: ['./table.component.css'],
 preserveWhitespaces: true
})
export class TableComponent implements OnInit {
 
 @ViewChild(MatTable)
 table: MatTable<any> | undefined;
 
 item: string = '';
 qtd: any = ''; 
 
 displayedColumns: string[] = ['item', 'qtd', 'actions'];
 dataSource = ELEMENT_DATA;
 constructor(public dialog: MatDialog) { }

 onDelete(index: number): void {
  this.dataSource.splice(index, 1);
  this.table?.renderRows();
 }

 

 onEdit(index: number, elemento: PeriodicElement): void{
   const dialogRef = this.dialog.open(DialogComponent, {
    width: '255px',
    data: elemento === null ? {qtd: null, item: ''} :
    {qtd: this.qtd, item: this.item},
   });

   dialogRef.afterClosed().subscribe(result => {
     if(result !== undefined){
      this.dataSource.splice(index, 1, result)
      this.table?.renderRows();
     }
   })

 }
 
 openDialog(element: PeriodicElement | null): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '255px',
      data: element === null ? {qtd: null, item: ''} :
      {qtd: this.qtd, item: this.item},
    });
 
   dialogRef.afterClosed().subscribe(result => {
     if(result !== undefined){
       this.dataSource.push(result)
       this.table?.renderRows();
       console.log(this.dataSource)     
     }
   });
  }
 
 ngOnInit(): void {
 }
 
}