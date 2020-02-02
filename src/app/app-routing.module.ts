import { SummaryComponent } from './summary/summary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: '',
    component: SummaryComponent},
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
