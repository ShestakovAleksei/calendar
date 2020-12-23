import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { MonthSwitcherComponent } from './components/month-switcher/month-switcher.component';
import { CalendarTableComponent } from './components/calendar-table/calendar-table.component';
import { TableBodyComponent } from './components/table-body/table-body.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    MonthSwitcherComponent,
    CalendarTableComponent,
    TableBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
