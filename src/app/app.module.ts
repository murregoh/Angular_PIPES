import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';

// Components
import { AppComponent } from './app.component';

// Pipes
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

// Language
import locales from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { PasswordPipe } from './pipes/password.pipe';

registerLocaleData(locales);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
