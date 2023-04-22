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

import { QuillModule } from 'ngx-quill'
import { CKEditorModule } from 'ckeditor4-angular';
import { IonicMathliveModule } from 'ionic-mathlive';
import MathliveBlot from './mathlive-blot';
import Quill from 'quill';

Quill.register(MathliveBlot)
import { importType } from '@angular/compiler/src/output/output_ast';
import { InicioAlumnosComponent } from './componentes/inicio-alumnos/inicio-alumnos.component';
import { MateriaAlumnosComponent } from './componentes/materia-alumnos/materia-alumnos.component';
import { ExamenAlumnosComponent } from './componentes/examen-alumnos/examen-alumnos.component';
import { ResultadosAlumnoComponent } from './componentes/resultados-alumno/resultados-alumno.component';

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
    InicioAlumnosComponent,
    MateriaAlumnosComponent,
    ExamenAlumnosComponent,
    ResultadosAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    QuillModule.forRoot(),
    CKEditorModule,
    IonicMathliveModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
