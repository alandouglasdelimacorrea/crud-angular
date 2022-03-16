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
 
@NgModule({
 declarations: [
   AppComponent,
   TableComponent,
   DialogComponent
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
   MatFormFieldModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
