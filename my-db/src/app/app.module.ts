import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonComponent } from './components/shared/button/button.component';
import { SelectComponent } from './components/shared/select/select.component';
import { InputComponent } from './components/shared/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
