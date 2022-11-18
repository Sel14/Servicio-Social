import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExamenComponent } from './componentes/examen/examen.component';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { LoginComponent } from './componentes/login/login.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UnidadesComponent } from './componentes/unidades/unidades.component';
import { CrearPreguntaComponent } from './componentes/crear-pregunta/crear-pregunta.component';
import { VerPreguntasComponent } from './componentes/ver-preguntas/ver-preguntas.component';
import { MateriaComponent } from './componentes/materia/materia.component';
import { importType } from '@angular/compiler/src/output/output_ast';

@NgModule({
  declarations: [
    AppComponent,
    ExamenComponent,
    SidenavComponent,
    LoginComponent,
    HeaderComponent,
    InicioComponent,
    UnidadesComponent,
    CrearPreguntaComponent,
    VerPreguntasComponent,
    MateriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
