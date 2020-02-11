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

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent,
    CheckboxComponent,
    RangeDatepickerComponent,
    TableComponent,
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
