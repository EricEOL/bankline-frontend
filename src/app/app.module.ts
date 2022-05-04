import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovementListComponent } from './components/movement-list/movement-list.component';
import { MovementNewComponent } from './components/movement-new/movement-new.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { HolderComponent } from './components/holder/holder.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MovementListComponent,
    MovementNewComponent,
    HolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CurrencyMaskModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
