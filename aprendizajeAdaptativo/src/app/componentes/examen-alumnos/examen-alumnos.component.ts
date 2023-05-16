import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

import { UnidadesService } from 'src/app/servicios/unidadesServices/unidades.service';
import { PreguntaService } from 'src/app/servicios/preguntaService/pregunta.service';
import { TemaInterface } from 'src/app/interfaces/tema-interface';
import { UnidadInterface } from 'src/app/interfaces/unidad-interface';
import { PreguntaInterface } from 'src/app/interfaces/pregunta-interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-examen-alumnos',
  templateUrl: './examen-alumnos.component.html',
  styleUrls: ['./examen-alumnos.component.css']
})
export class ExamenAlumnosComponent implements OnInit {
  formBuilder: any;

  constructor(
    private modalService: NgbModal,
    private preguntaService: PreguntaService,
    private service: UnidadesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has("idAsignatura")){
        this.service.getUnidadesByAsignatura(params.get("idAsignatura")).subscribe(
          data=>{
            this.unidad = <UnidadInterface[]> data;
            this.idAsignatura = params.get("idAsignatura")
            this.tema = <TemaInterface[]> []
            for (let i = 0; i < this.unidad.length; i++) {
              this.service.getTemasByUnidades(this.unidad[i].idUnidades).subscribe(
                data1=>{
                  const arr = <TemaInterface[]> data1
                  for (let j = 0; j < arr.length; j++) {
                    this.tema.push(arr[j])
                  }
                }
              )
            }
            this.preguntaService.getPreguntas().subscribe(
              data2=>{
                this.pregunta = <PreguntaInterface[]>data2
              }
            )
          }
        )
      }
      else{
        this.idAsignatura="1";
        this.service.getUnidadesByAsignatura(this.idAsignatura).subscribe(
          data=>{
            this.unidad = <UnidadInterface[]> data;
            this.tema = <TemaInterface[]> []
            for (let i = 0; i < this.unidad.length; i++) {
              this.service.getTemasByUnidades(this.unidad[i].idUnidades).subscribe(
                data1=>{
                  const arr = <TemaInterface[]> data1
                  for (let j = 0; j < arr.length; j++) {
                    this.tema.push(arr[j])
                  }
                }
              )
            }
            this.preguntaService.getPreguntas().subscribe(
              data2=>{
                this.pregunta = <PreguntaInterface[]>data2
              }
            )
          }
        )
      }
    })
  }

  unidad: UnidadInterface[] = <UnidadInterface[]>[]
  tema: TemaInterface[] = <TemaInterface[]>[]
  pregunta: PreguntaInterface[] = <PreguntaInterface[]>[]
  index: number = 0;
  currentPregunta: any = null;
  idAsignatura: any = ''
  isCollapsed = true;
  iniciar=true;
  terminar=false;
  terminado=false;
  rowsPreguntas: any[] = [];
  respondida: any=0; 
  examen={
    nombre: "Geometría Analítica G-3",
    duracion: "02:00",
  }
  //Temas y unidades es para los cambios en el select
  temas: TemaInterface[] = <TemaInterface[]>[];
  preguntas: PreguntaInterface[] = <PreguntaInterface[]>[];
  //Son justos y necesarios
  unidadID: any;
  temaID: any;
  closeResult = '';

  getpreguntas(){
    this.temaID = "3";
      this.unidadID = "2";
      
      if (this.temaID != null) {
        for (let i = 0; i < this.pregunta.length; i++) {
          if (
            this.pregunta[i].idunidad == this.unidadID &&
            this.pregunta[i].idtema == this.temaID
          ) {
          this.preguntas.push(this.pregunta[i]);
        }
      }
    }
    this.showPreguntas();
    this.countPreguntas();
    this.iniciar= false;
  }

  salir(){
    this.router.navigate(["/materia-alumnos"])
  }

  showPreguntas() {
    let temp = 0;
    for(let i=0; i<this.preguntas.length; i++){
      if(i == this.index){
        temp = i;
        this.currentPregunta=this.preguntas[i];
        break;
      } 
    }
    if(temp==this.preguntas.length-1){ 
      this.terminar=true;
    } 
  }

  countPreguntas(){
    let temp: any[] = [];
    for(let i=0; i<this.preguntas.length; i++){
      temp.push(this.preguntas[i]);
      if((i+1)%4==0 || i==this.preguntas.length-1){
        this.rowsPreguntas.push(temp);
        temp = [];
      }
    }
  }

  menorque(index: any){
    if(index<=this.respondida){
      return true;
    }
    return false;
  }

  nextPregunta(){
    this.index++;
    this.respondida=this.index;
    this.showPreguntas();
  }

  examenTerminado(){
    this.terminado=true;
  }
}
