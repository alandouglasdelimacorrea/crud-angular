import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './table/dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TableCheckComponent } from './table-check/table-check.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

 
@NgModule({
 declarations: [
   AppComponent,
   TableComponent,
   DialogComponent,
   TableCheckComponent
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   MatToolbarModule,
   NoopAnimationsModule,
   MatIconModule,
   MatTableModule,
   MatDialogModule,
   FormsModule,
   MatButtonModule,
   MatInputModule,
   MatFormFieldModule,
   MatCheckboxModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
