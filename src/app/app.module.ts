import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from "ngx-bootstrap/modal";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { MonthSwitcherComponent } from './components/month-switcher/month-switcher.component';
import { CalendarTableComponent } from './components/calendar-table/calendar-table.component';
import { TableBodyComponent } from './components/table-body/table-body.component';
import { DateService } from "./services/date.service";
import { UserService } from "./services/user.service";
import { VacationService } from "./services/vacation.service";
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    MonthSwitcherComponent,
    CalendarTableComponent,
    TableBodyComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [
    DateService,
    UserService,
    VacationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
