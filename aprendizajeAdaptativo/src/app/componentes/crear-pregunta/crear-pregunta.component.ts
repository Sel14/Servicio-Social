import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-pregunta',
  templateUrl: './crear-pregunta.component.html',
  styleUrls: ['./crear-pregunta.component.css']
})
export class CrearPreguntaComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) { }

  examen!: FormGroup;

  //Parte para selecionar unidad y tema
  unidad: Array<any> = [
    { nombre: 'unidad 1', temas: ['tema 1', 'tema 2'] },
    { nombre: 'unidad 2', temas: ['tema 3', 'tema 4'] },
  ];

  temas: Array<any> = [];

  cambiarUnidad(unidad: any) {
    this.temas = this.unidad.find((undad: any) => undad.nombre == unidad.target.value).temas;
  }
  //roytuts.com/cascading-or-dependent-dropdown-using-angular/


  ngOnInit(): void {
    this.examen = new FormGroup({
      reactivos: new FormArray([
        this.crearReactivo()
      ])
    })
  }


  crearReactivo(): FormGroup {
    return this.formBuilder.group({
      contenido: "",
      nivel: "",
      ra: "",
      preguntaCritica: "",
      respuestas: new FormArray([
        this.crearRespuestas()
      ])
    })
  }

  agregarReactivo() {
    const reactivos = this.examen.get('reactivos') as FormArray
    reactivos.push(this.crearReactivo());
  }

  getReactivo(form: any) {
    return form.controls.reactivos.controls
  }


  //aqui se genera la seccion para generar respuesta no se que es lo que falla

  crearRespuestas(): FormGroup {
    return this.formBuilder.group({
      contenido: "",
      correcto: "",
      preguntaSiguiente: "",
    })
  }

  agregarRespuesta(k: any) {
    const respuesta = (this.examen.get('reactivos') as FormArray).controls[k].get('respuestas') as FormArray;
    respuesta.push(this.crearRespuestas());
  }

  getRespuesta(form: any) {
    return form.controls.respuestas.controls

  }



  eliminarUnidad(i: any) {
    const unidad = this.examen.get('unidades') as FormArray;
    unidad.removeAt(i);
  }

  eliminarTema(i: any, j: any) {
    const tema = (this.examen.get('unidades') as FormArray).controls[i].get('temas') as FormArray;
    tema.removeAt(j);
  }


  eliminarReactivo(i: any) {
    const reactivos = this.examen.get('reactivos') as FormArray;
    reactivos.removeAt(i);
  }

  eliminarRespuesta(i: any, j: any) {
    const respuesta = (this.examen.get('reactivos') as FormArray).controls[i].get('respuestas') as FormArray;
    respuesta.removeAt(j);
  }


}
