import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonComponent } from './components/shared/button/button.component';
import { SelectComponent } from './components/shared/select/select.component';
import { InputComponent } from './components/shared/input/input.component';
import { CheckboxComponent } from './components/shared/checkbox/checkbox.component';
import { RangeDatepickerComponent } from './components/shared/range-datepicker/range-datepicker.component';
import { TableComponent } from './components/shared/table/table.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WeldingTableComponent } from './components/shared/welding-table/welding-table.component';
import { ObjectsTableComponent } from './components/shared/objects-table/objects-table.component';

import { EmployesPageComponent } from './pages/employes-page/employes-page.component';
import { WeldingsPageComponent } from './pages/weldings-page/weldings-page.component';
import { ObjectsPageComponent } from './pages/objects-page/objects-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent,
    CheckboxComponent,
    RangeDatepickerComponent,
    TableComponent,
    EmployesPageComponent,
    NavigationComponent,
    WeldingsPageComponent,
    WeldingTableComponent,
    ObjectsTableComponent,
    ObjectsPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
