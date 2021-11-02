import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamenComponent } from './componentes/examen/examen.component';


const routes: Routes = [
  { path: 'examen', component: ExamenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
