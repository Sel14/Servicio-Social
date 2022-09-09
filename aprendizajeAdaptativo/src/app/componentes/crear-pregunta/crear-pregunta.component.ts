import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import {MathQuillLoader} from 'ngx-mathquill';
import Quill from 'quill';
import katex from "katex";
import "katex/dist/katex.min.css";
import MathliveBlot from 'src/app/mathlive-blot';
// @ts-ignore
window.katex = katex;


MathQuillLoader.loadMathQuill(mathquill => {

  // do what you want here
  // for example:
  console.log(mathquill.getInterface(2));

});


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
  public onEditorCreated(quill: Quill) {
    console.log("event",quill);
    this.enableMathLive(quill);  // Insert MathLive field when the formula button is clicked.
  }

  // Sets a handler for the formula button in quill toolbar to insert a mathlive blot.
  enableMathLive(quill: Quill) {
    //quill.insertEmbed(1, 'mathlive', 'INSERT', 'user');
    console.log("heree");
    const toolbar = quill.getModule('toolbar')
    toolbar.addHandler('formula', ()=>this.formulaHandler(quill));
  }

  formulaHandler(quill:Quill){
      const range = quill.getSelection() || { index: quill.getLength() - 1 };
      let cursorPos = range.index;  // Get cursor position.
      console.log('insert MathLive Blot into quill.');
    quill.insertEmbed(cursorPos, "mathlive", "");
  }

  editorOptions= {
    toolbar: [['formula']]
};
editorStyle = {
  height: '300px',
  backgroundColor: '#ffffff',
  color:'black',
  fontSize:'20px',
  fontWeight:'500',
  pointer:'cursor'
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
