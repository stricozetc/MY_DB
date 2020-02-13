import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployesPageComponent } from './pages/employes-page/employes-page.component';

const routes: Routes = [
  { path: '', component: EmployesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
