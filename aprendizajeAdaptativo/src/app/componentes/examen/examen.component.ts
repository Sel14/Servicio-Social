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
  //reactivos!: FormArray;
  respuestas!: FormArray; //variable de respuestas

  ngOnInit(): void {
    this.examen = new FormGroup({
      reactivos: new FormArray([
        this.crearReactivo()
      ])
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
    const reactivos=this.examen.get('reactivos') as FormArray;
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
  
  agregarRespuesta(i: any){
    const respuesta = (this.examen.get('reactivos') as FormArray).controls[i].get('respuestas') as FormArray;
    respuesta.push(this.crearRespuestas())
  }

  getRespuesta(form: any){
    return form.controls.respuestas.controls
    
  }

  eliminarReactivo(i:any){
    const reactivos=this.examen.get('reactivos') as FormArray;
    reactivos.removeAt(i);
  }
  
  eliminarRespuesta(i:any, j:any){
    const respuesta = (this.examen.get('reactivos') as FormArray).controls[i].get('respuestas') as FormArray;
    respuesta.removeAt(j);
  }

}





