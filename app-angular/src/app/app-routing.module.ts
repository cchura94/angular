import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './producto/producto.component'
import { PrimerComponente } from './primercomponente/primer.component'



const routes: Routes = [
	{path:"", component: ProductoComponent},
	{path:"primer", component: PrimerComponente}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
