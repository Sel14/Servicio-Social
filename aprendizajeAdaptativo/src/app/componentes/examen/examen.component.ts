import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  temaList: Array<{}> = [];
  tema!:string;

  constructor(private formBuilder: FormBuilder) { }

  examen!: FormGroup;
  reactivos!: FormArray;
  respuestas!: FormArray; //variable de respuestas

  ngOnInit(): void {
    this.examen = new FormGroup({
      reactivos: new FormArray([])
    })
  }

  crearReactivo() : FormGroup {
    return this.formBuilder.group({
      contenido: "",
      tema: "",
      nivel: "",
      ra: "",
      preguntaCritica: "",
      respuestas: new FormArray([
        this.crearRespuestas()
      ])
    })
  }



  agregarTema(){
    this.temaList.push(this.tema)
  }

  agregarReactivo(){
    this.reactivos=this.examen.get('reactivos') as FormArray;
    this.reactivos.push(this.crearReactivo());
  }

  getReactivo(){
    return (this.examen.get('reactivos') as FormArray).controls;
  }


  //aqui se genera la seccion para generar respuesta no se que es lo que falla
  
  crearRespuestas(): FormGroup{
    return this.formBuilder.group({
      contenido: "",
      correcto: "",
      preguntaSiguiente: "",
    })
  }
  
  agregarRespuesta(){
    this.respuestas=this.respuestas.get('respuestas') as FormArray;
    this.reactivos.push(this.crearReactivo());
  }

  getRespuesta(){
    return (this.reactivos.get('respuestas') as FormArray).controls
  }
  
}





