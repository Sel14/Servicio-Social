import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamenComponent } from './componentes/examen/examen.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CrearPreguntaComponent } from './componentes/crear-pregunta/crear-pregunta.component';
import { VerPreguntasComponent } from './componentes/ver-preguntas/ver-preguntas.component';

const routes: Routes = [
  { path: 'examen', component: ExamenComponent },
  { path: 'login', component:LoginComponent},
  { path: '', component:InicioComponent},
  { path: 'crear', component:CrearPreguntaComponent },
  { path: 'ver', component:VerPreguntasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
