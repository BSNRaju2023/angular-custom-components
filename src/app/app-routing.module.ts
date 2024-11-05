import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFieldsTableComponent } from './dynamic-fields-table/dynamic-fields-table.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [{path:'testing',component:TestingComponent},
{ path: 'table-dialog-demo', loadChildren: () => import('./dynamic-fields-dialog/dynamic-fields-dialog.module').then(m => m.DynamicFieldsDialogModule) }];
// {path:'dynamic-table',component:DynamicFieldsTableComponent}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
