import { Component } from '@angular/core';
import { DatosService } from './datos.service'
import { publicacion } from './publicacion'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Hola Angular';
  hola : string = "Saludos desde app.component.ts";
  personas : string[] = ["Ana","Pedro","Oscar"];

  nombre : string;
  edad : number;
  direccion : {
  	avenida : string;
  	calle : string;
  	ciudad : string;
  	nro : number
  }

  publicaciones: publicacion;

  constructor(private data_service: DatosService){
  	this.nombre = "Oscar";
  	this.edad = 30;
  	this.direccion = {
  		avenida : "Av 6 de agosto",
  		calle : "Calle 7",
  		ciudad : "La Paz",
  		nro : 123
  	}

    this.data_service.obtener_datos().subscribe(data => {
      console.log(data);
      this.publicaciones = data;
    })
  }

}
