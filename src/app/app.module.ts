import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupFormComponent } from './components/popup-form/popup-form.component';
import { PopupSpinnerComponent } from './components/popup-spinner/popup-spinner.component';
import { PopupErrorComponent } from './components/popup-error/popup-error.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupFormComponent,
    PopupSpinnerComponent,
    PopupErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
