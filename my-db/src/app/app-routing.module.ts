import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployesPageComponent } from './pages/employes-page/employes-page.component';
import { WeldingsPageComponent } from './pages/weldings-page/weldings-page.component';
import { ObjectsPageComponent } from './pages/objects-page/objects-page.component';

const routes: Routes = [
  { path: '', component: EmployesPageComponent },
  { path: 'weldings', component: WeldingsPageComponent },
  { path: 'objects', component: ObjectsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
