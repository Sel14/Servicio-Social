import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-pregunta',
  templateUrl: './crear-pregunta.component.html',
  styleUrls: ['./crear-pregunta.component.css']
})
export class CrearPreguntaComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) { }

  //Se declara el formGroup para guardar los datos
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

  //Se inicializa la pagina generando un formulario vacio
  ngOnInit(): void {
    this.examen = new FormGroup({
      reactivos: new FormArray([
        this.crearReactivo()
      ])
    })
  }

  //Se construye el formulario para los reactivos
  crearReactivo(): FormGroup {
    return this.formBuilder.group({
      contenido: "",
      procedimiento: "",
      nivel: "",
      correcto: "",
      unidadId: "",
      temaId: "",
      respuestas: new FormArray([
        this.crearRespuestas()
      ]),
      
    })
  }

  //boton para crear un reactivo
  agregarReactivo() {
    const reactivos = this.examen.get('reactivos') as FormArray
    reactivos.push(this.crearReactivo());
  }

  //se utiliza para obtener la posicion del reactivo
  getReactivo(form: any) {
    return form.controls.reactivos.controls
  }


  //Se construye el formulario para los reactivos
  crearRespuestas(): FormGroup {
    return this.formBuilder.group({
      contenido: "",
    })
  }

  //boton para crear una nueva respuesta
  agregarRespuesta(k: any) {
    const respuesta = (this.examen.get('reactivos') as FormArray).controls[k].get('respuestas') as FormArray;
    respuesta.push(this.crearRespuestas());
  }

  //se obtine la posicion de la respuesta dentro del reactivo
  getRespuesta(form: any) {
    return form.controls.respuestas.controls

  }

  //Creo que no se utiliza más xd
  eliminarUnidad(i: any) {
    const unidad = this.examen.get('unidades') as FormArray;
    unidad.removeAt(i);
  }

  
  //Creo que no se utiliza más xd
  eliminarTema(i: any, j: any) {
    const tema = (this.examen.get('unidades') as FormArray).controls[i].get('temas') as FormArray;
    tema.removeAt(j);
  }

  //Este si xd, es oara eliminar un reattivo
  eliminarReactivo(i: any) {
    const reactivos = this.examen.get('reactivos') as FormArray;
    reactivos.removeAt(i);
  }

  //Se usa para eliminar una respuesta
  eliminarRespuesta(i: any, j: any) {
    const respuesta = (this.examen.get('reactivos') as FormArray).controls[i].get('respuestas') as FormArray;
    respuesta.removeAt(j);
  }

  //Aqui es para mandar para la base de dato que no esta implementada xd
  mandar(){
    console.log(this.examen.value)
  }

}
