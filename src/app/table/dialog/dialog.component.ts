import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
 
export interface DialogData {
 item: string;
 qtd: number;
}
 
@Component({
 selector: 'app-dialog',
 templateUrl: './dialog.component.html',
 styleUrls: ['./dialog.component.css'],
 preserveWhitespaces: true
})
export class DialogComponent implements OnInit {
 
 constructor(
   public dialogRef: MatDialogRef<DialogComponent>,
   @Inject(MAT_DIALOG_DATA) public data: DialogData,
 ) { }

  valid: boolean = false;
 
  validate(data: DialogData){
    if(typeof data.qtd === 'number' && data.qtd > 0){
      if(data.item.length > 0){
        this.valid = true;
      }
    }
    this.valid =false;
  }

 onNoClick(): void {
   this.dialogRef.close();
 }
 
 ngOnInit(): void {
 }
 
}
 
