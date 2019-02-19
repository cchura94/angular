import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponente } from './primercomponente/primer.component';
import { ProductoComponent } from './producto/producto.component';
import { DatosService } from './datos.service'


@NgModule({
  declarations: [
    AppComponent,
    PrimerComponente,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
