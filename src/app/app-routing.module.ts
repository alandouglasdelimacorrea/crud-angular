import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableCheckComponent } from './table-check/table-check.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: '', component: TableComponent},
  {path: 'lista', component: TableCheckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
