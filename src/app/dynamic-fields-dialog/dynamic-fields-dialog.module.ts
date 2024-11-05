import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { AddEditDataDialogComponent } from './add-edit-data-dialog/add-edit-data-dialog.component';
import { TableDialogDemoComponent } from './table-dialog-demo/table-dialog-demo.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TableDialogDemoComponent }
];

@NgModule({
  declarations: [
    TableComponent,
    AddEditDataDialogComponent,
    TableDialogDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DynamicFieldsDialogModule { }
