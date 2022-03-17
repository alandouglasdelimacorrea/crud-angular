import { _isNumberValue } from '@angular/cdk/coercion';
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

  validate(item: any, qtd: any){
    if(!isNaN(qtd) && qtd !== null && qtd !== ''
        && item !== null && item !== ''){
      return true;
    }
    return false;
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }
 
}
 
