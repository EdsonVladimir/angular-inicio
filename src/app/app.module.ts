import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PruebaComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
