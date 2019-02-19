import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { publicacion } from './publicacion'


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http_client: HttpClient) {
  	console.log("Servicio trabajando")
  }

  obtener_datos(){
  	return this.http_client.get<publicacion>("https://jsonplaceholder.typicode.com/posts")
  }
}
