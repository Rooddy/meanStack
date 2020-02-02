import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatNativeDateModule, MatFormFieldModule, MatTableModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { HttpClientModule } from '@angular/common/http';
import { SummaryComponent } from './summary/summary.component';

import { GaugeChartModule } from 'angular-gauge-chart';
// import {CdkTableModule} from '@angular/cdk/table';
// import { DataSource } from '@angular/cdk/collections';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatSidenavModule,
    MatMomentDateModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    GaugeChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
