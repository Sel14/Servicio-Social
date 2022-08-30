import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  examen!: FormGroup;

  unidad: Array<any> = [
    { nombre: 'unidad 1', temas: ['tema 1', 'tema 2'] },
    { nombre: 'unidad 2', temas: ['tema 3', 'tema 4'] },
  ];

  temas: Array<any> = [];

  cambiarUnidad(unidad: any) {
    this.temas = this.unidad.find((undad: any) => undad.nombre == unidad.target.value).temas;
  }


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
      preguntaCritica: "",
      respuestas: new FormArray([
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
      correcto: "",
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

}





