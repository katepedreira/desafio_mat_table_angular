import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';

const routes: Routes = [
  {path: "", redirectTo: 'table', pathMatch: 'full'},
  {path: "table", component: TableComponent},
  {path: "top", component: TopComponent},
  {path: "bottom", component: BottomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


