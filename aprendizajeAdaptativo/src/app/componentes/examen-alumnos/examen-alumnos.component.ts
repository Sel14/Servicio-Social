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
                console.log("pregunta")
                console.log(this.pregunta)
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
  examen={
    nombre: "Examen de Matemáticas 1",
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
        console.log("Hola2")
        console.log(this.pregunta.length)
        for (let i = 0; i < this.pregunta.length; i++) {
          console.log("hola");
          if (
            this.pregunta[i].idunidad == this.unidadID &&
            this.pregunta[i].idtema == this.temaID
          ) {
          this.preguntas.push(this.pregunta[i]);
        }
      }
      console.log(this.preguntas)
    }
    this.showPreguntas();
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
    console.log(this.preguntas.length-1);
    if(temp==this.preguntas.length-1){ 
      this.terminar=true;
    } 
  }

  nextPregunta(){
    this.index++;
    this.showPreguntas();
  }

  examenTerminado(){
    this.terminado=true;
  }

   cambiarTema(e: any) {
    this.temaID = null;
    this.preguntas = [];

    for (let i = 0; i < this.temas.length; i++) {
      if (this.temas[i].nombreTema == e.target.value) {
        this.temaID = this.temas[i].idTema;
      }
    }
    if (this.temaID != null) {
      for (let i = 0; i < this.pregunta.length; i++) {
        if (
          this.pregunta[i].idunidad == this.unidadID &&
          this.pregunta[i].idtema == this.temaID
        ) {
          this.preguntas.push(this.pregunta[i]);
        }
      }
      console.log(this.preguntas)
    }
  }


  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  //actualiza lo datos y recarga la página
  async save(pregunta: PreguntaInterface) {
    console.log(pregunta);
    this.preguntaService.putPregunta(pregunta).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
    let res: {idReactivo: string, orden: number, idRespuesta: string, respuestaString: string, idsigreactivo: string} = <any>{}
    for (let i = 0; i<pregunta.listOfRespuestas.length; i++){
      res.idReactivo = pregunta.idreactivo
      res.orden = i
      res.respuestaString =  pregunta.listOfRespuestas[i].respuesta
      res.idsigreactivo = '1'
      res.idRespuesta = pregunta.idreactivo + '-' + i.toString()
      console.log(res);
      await this.preguntaService.putRespuesta(res).subscribe(
        (resp) => console.log(resp),
        (err) => console.log(err)
      )
    }
    //window.location.reload();
  }
  
  linkCrearPreguntas(idAsignatura: any){
    this.router.navigate(["/"+idAsignatura, 'materia', 'crear'])
  }
}
