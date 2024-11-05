import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestingComponent } from '../testing/testing.component';
const routes: Routes = [
  { path: '', component: TestingComponent }
];

@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomModule { }
