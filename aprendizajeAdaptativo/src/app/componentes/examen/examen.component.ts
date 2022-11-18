import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Form } from '@angular/forms';


@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  examen!: FormGroup;

  unidades: Array<any> = [
    { nombre: 'unidad 1: Suma y Resta', id: 0 },
    { nombre: 'unidad 2: Division Y Multiplicación', id: 1 },
  ];

  tema: Array<any> = [
    { nombre: 'tema 1: Suma', unidadid: 0, id: 0 },
    { nombre: 'tema 2: Resta', unidadid: 0, id: 1 },
    { nombre: 'tema 1: Division', unidadid: 1, id: 0 },
    { nombre: 'tema 2: Multiplicación', unidadid: 1, id: 1 },
  ];

  pregunta: Array<any> = [
    {
      contenido: 'Este es el contenido de la pregunta',
      dificultad: 1,
      procedimiento: true,
      unidadid: 0,
      temaid: 0,
      correcto: 2,
      respuestas: ['respuesta a', 'respuesta b', 'respuesta c', 'respuesta d'],
    },
    {
      contenido: 'Este es el contenido de otra pregunta',
      dificultad: 2,
      procedimiento: false,
      unidadid: 0,
      temaid: 0,
      correcto: 2,
      respuestas: [
        'esta no es la respuesta',
        'es la siguente',
        'es esta la correcta',
        'te pasaste',
      ],
    },
    {
      contenido: 'Cual es el primer pokemon',
      dificultad: 1,
      procedimiento: true,
      unidadid: 0,
      temaid: 1,
      correcto: 0,
      respuestas: ['Bulbasur', 'Mew', 'Arceus', 'Ryhorn'],
    },
    {
      contenido: 'De que color es el caballo blanco',
      dificultad: 1,
      procedimiento: true,
      unidadid: 0,
      temaid: 1,
      correcto: 2,
      respuestas: ['Negro', 'Amarillo', 'Blanco', 'Cafe'],
    },
    {
      contenido: '2 + 2',
      dificultad: 1,
      procedimiento: true,
      unidadid: 1,
      temaid: 0,
      correcto: 3,
      respuestas: ['1', '2', '3', '4'],
    },
    {
      contenido: '2x + 3x',
      dificultad: 1,
      procedimiento: true,
      unidadid: 1,
      temaid: 0,
      correcto: 2,
      respuestas: ['x', '-x', '5x', '-5x'],
    },
    {
      contenido: 'Best girl de hololive EN',
      dificultad: 1,
      procedimiento: true,
      unidadid: 1,
      temaid: 1,
      correcto: 0,
      respuestas: ['Ina', 'Mumei', 'Gura', 'Cali'],
    },
  ];

  temas: Array<any> = [];
  preguntas: Array<any> = [];
  respuestas: Array<any>=[];
  //Son justos y necesarios
  unidadID: any;
  temaID: any;
  correcto:any;

  ngOnInit(): void {
    this.examen = new FormGroup({
      unidades: new FormArray([
        this.crearUnidad()
      ])
    })
  }

  crearUnidad() : FormGroup {
    return this.formBuilder.group({
      contenido: "",
      id:"",
      temas: new FormArray([
        this.crearTema()
      ])
    })
  }

  agregarUnidad(){
    const unidades = this.examen.get('unidades') as FormArray;
    unidades.push(this.crearUnidad());
  }

  getUnidad(form: any){
    return form.controls.unidades.controls
  }
  
  crearTema() : FormGroup {
    return this.formBuilder.group({
      contenido: "",
      id:"",
      unidadId:"",
      reactivos: new FormArray([
        this.crearReactivo()
      ])
    })
  }

  agregarTema(i: any){
    const tema = (this.examen.get('unidades') as FormArray).controls[i].get('temas') as FormArray;
    tema.push(this.crearTema())
  }

  getTema(form: any){
    return form.controls.temas.controls
  }
  
  
  crearReactivo() : FormGroup {
    return this.formBuilder.group({
      contenido: "",
      nivel: "",
      ra: "",
      procedimiento:"",
      preguntaCritica: "",
      correcto: "",
      unidadId:"",
      temaId:"",
      respuestas: new FormArray([
        this.crearRespuestas(),
        this.crearRespuestas(),
        this.crearRespuestas(),
        this.crearRespuestas()
      ])
    })
  }

  agregarReactivo(i: any, j: any){
    const reactivos=((this.examen.get('unidades') as FormArray).controls[i].get('temas') as FormArray).controls[j].get('reactivos') as FormArray;
    reactivos.push(this.crearReactivo());
  }

  getReactivo(form: any){
    return form.controls.reactivos.controls
  }


  //aqui se genera la seccion para generar respuesta no se que es lo que falla
  
  crearRespuestas(): FormGroup{
    return this.formBuilder.group({
      contenido: "",
      preguntaSiguiente: "",
    })
  }
  
  agregarRespuesta(i: any, j:any, k: any){
    const respuesta = (((this.examen.get('unidades') as FormArray).controls[i].get('temas') as FormArray).controls[j].get('reactivos') as FormArray).controls[k].get('respuestas') as FormArray;
    respuesta.push(this.crearRespuestas());
  }

  getRespuesta(form: any){
    return form.controls.respuestas.controls
  }



  eliminarUnidad(i: any){
    const unidad=this.examen.get('unidades') as FormArray;
    unidad.removeAt(i);
  }

  eliminarTema(i:any, j:any){
    const tema = (this.examen.get('unidades') as FormArray).controls[i].get('temas') as FormArray;
    tema.removeAt(j);
  }

  eliminarReactivo(i:any, j:any, k: any){
    const reactivos=((this.examen.get('unidades') as FormArray).controls[i].get('temas') as FormArray).controls[j].get('reactivos') as FormArray;
    reactivos.removeAt(k);
  }
  
  eliminarRespuesta(i:any, j:any, k:any, l:any){
    const respuesta = (((this.examen.get('unidades') as FormArray).controls[i].get('temas') as FormArray).controls[j].get('reactivos') as FormArray).controls[k].get('respuestas') as FormArray;
    respuesta.removeAt(l);
  }

  cambiarUnidad(e: any, form: any) {
    this.unidadID = null;
    this.temas = [];
    for (let i = 0; i < this.unidades.length; i++) {
      if (this.unidades[i].nombre == e.target.value) {
        this.unidadID = this.unidades[i].id;
        this.unidadExamen(form, i);
      }
    }

    if (this.unidadID != null) {
      for (let i = 0; i < this.tema.length; i++) {
        if (this.tema[i].unidadid == this.unidadID) {
          this.temas.push(this.tema[i]);
        }
      }
    }
  }

  cambiarTema(e: any, form: any) {
    this.temaID = null;
    this.preguntas = [];
    for (let i = 0; i < this.tema.length; i++) {
      if (this.tema[i].nombre == e.target.value) {
        this.temaID = this.tema[i].id;
        this.temaExamen(form, i)
      }
    }

    if (this.temaID != null) {
      for (let i = 0; i < this.pregunta.length; i++) {
        if (
          this.pregunta[i].unidadid == this.unidadID &&
          this.pregunta[i].temaid == this.temaID
        ) {
          this.preguntas.push(this.pregunta[i]);
        }
      }
    }
  }

  cambiarPregunta(e: any, form: any) {
    this.respuestas=[];
    this.correcto=null;
    for (let i = 0; i < this.preguntas.length; i++) {
      if (this.preguntas[i].contenido == e.target.value) {
        this.respuestas = this.preguntas[i].respuestas;
        this.prguntaExamen(form, i);
      }
    }
  }
  //this.form.controls['campo'].setValue(valor)
//trear el form con la funcion getTemas()
  unidadExamen(form: any, i: any){
    form.controls['contenido'].setValue(this.unidades[i].nombre);
    form.controls["id"].setValue(this.unidades[i].id)
  }

  temaExamen(form: any, i:any){
    form.controls['contenido'].setValue(this.tema[i].nombre);
    form.controls['id'].setValue(this.tema[i].id);
    form.controls['unidadId'].setValue(this.tema[i].unidadid);
  }

  prguntaExamen(form: any, i:any){
    form.controls['contenido'].setValue(this.preguntas[i].contenido);
    form.controls['nivel'].setValue(this.preguntas[i].dificultad);
    form.controls['procedimiento'].setValue(this.preguntas[i].procediemiento);
    form.controls['ra'].setValue();//aun no se como llenarlo
    form.controls['preguntaCritica'].setValue();//aun no se como llenarlo
    form.controls['unidadId'].setValue(this.preguntas[i].unidadid);
    form.controls['temaId'].setValue(this.preguntas[i].temaid);
    form.controls['correcto'].setValue(this.preguntas[i].correcto);
    let j = 0;
    for(let respuestas of this.getRespuesta(form)){
      respuestas.controls['contenido'].setValue(this.respuestas[j]);
      j++
    };
  }

  respuestaExamen(form:any, j:any){
    form.controls['contenido'].setValue(this.respuestas[j]);
  }
  
  mandar(){
    console.log(this.examen.value)
  }

}





