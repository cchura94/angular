import { Component } from '@angular/core';

@Component({
	selector: 'primer-componente',
	//template: '<h1>Hola mi primer componente</h1>',
	templateUrl: './primer.component.html',
	//styles: ['color:#ccc;'],
	styleUrls: ['./primer.component.css']

})

export class PrimerComponente{
	titulo:string = "Hola mi primer componente"
	usuario : string[];
	activo : boolean;

	constructor() {
		this.usuario = ["Ana", "Pedro", "Cristian"]
		this.activo = false;
	}

	add_usuario(dato){
		this.usuario.push(dato.value)
		return false;
	}

	eliminar_usuario(user){

		for (let i = 0; i < this.usuario.length; i++) {
			if (user == this.usuario[i]) {
				this.usuario.splice(i, 1)
			}
		}
	}

	evento_nuevo(){
		this.activo = !this.activo;
	}
}