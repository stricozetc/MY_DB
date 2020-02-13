import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployesPageComponent } from './pages/employes-page/employes-page.component';
import { WeldingsPageComponent } from './pages/weldings-page/weldings-page.component';

const routes: Routes = [
  { path: '', component: EmployesPageComponent },
  { path: 'weldings', component: WeldingsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
