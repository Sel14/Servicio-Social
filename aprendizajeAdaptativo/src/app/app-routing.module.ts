import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamenComponent } from './componentes/examen/examen.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path: 'examen', component: ExamenComponent },
  { path: 'login', component:LoginComponent},
  { path: '', component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
