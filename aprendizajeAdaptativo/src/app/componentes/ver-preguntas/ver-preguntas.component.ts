import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ver-preguntas',
  templateUrl: './ver-preguntas.component.html',
  styleUrls: ['./ver-preguntas.component.css']
})
export class VerPreguntasComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  

  unidad: Array<any> = [
    { nombre: 'unidad 1: Suma y Resta', id: 0 },
    { nombre: 'unidad 2: Division Y Multiplicación', id: 1 },
  ]

  tema: Array<any> = [
    {nombre: 'tema 1: Suma', unidadid: 0, id:0},
    {nombre: 'tema 2: Resta', unidadid: 0, id:1},
    {nombre: 'tema 1: Division', unidadid: 1, id:0},
    {nombre: 'tema 2: Multiplicación', unidadid: 1, id:1},
  ]

  pregunta: Array<any> = [
    { contenido: 'Este es el contenido de la pregunta', dificultad: 1, procedimiento: true, unidadid: 0, temaid:0,
      respuestas: [{ 
        0:[{contenido: 'respuesta a', correcto: false}], 
        1:[{contenido: 'respuesta b', correcto: false}],
        2:[{contenido: 'respuesta c', correcto: true}],
        3:[{contenido: 'respuesta d', correcto: false}] 
      }]  
    },
    {contenido: 'Este es el contenido de otra pregunta', dificultad: 2, procedimiento: false, unidadid: 0, temaid:0,
      respuestas: [{ 
        0:[{contenido: 'esta no es la respuesta', correcto: false}], 
        1:[{contenido: 'es la siguente', correcto: false}],
        2:[{contenido: 'es esta la correcta', correcto: true}],
        3:[{contenido: 'te pasaste', correcto: false}]
      }]
    },
    { contenido: 'Cual es el primer pokemon', dificultad: 1, procedimiento: true, unidadid: 0, temaid:1,
      respuestas: [{ 
        0:[{contenido: 'Bulbasur', correcto: true}], 
        1:[{contenido: 'Mew', correcto: false}],
        2:[{contenido: 'Arceus', correcto: false}],
        3:[{contenido: 'Ryhorn', correcto: false}]
      }] 
    },
    { contenido: 'De que color es el caballo blanco', dificultad: 1, procedimiento: true, unidadid: 0,temaid:1,
      respuestas: [{ 
        0:[{contenido: 'Negro', correcto: false}], 
        1:[{contenido: 'Amarillo', correcto: false}],
        2:[{contenido: 'Blanco', correcto: true}],
        3:[{contenido: 'Cafe', correcto: false}]
      }] 
    },
    {
      contenido: '2 + 2', dificultad: 1, procedimiento: true, unidadid: 1, temaid:0,
      respuestas: [{ 
        0:[{contenido: '1', correcto: false}], 
        1:[{contenido: '2', correcto: false}],
        2:[{contenido: '3', correcto: false}],
        3:[{contenido: '4', correcto: true}]
    }] },
    {
      contenido: '2x + 3x', dificultad: 1, procedimiento: true, unidadid: 1, temaid:0,
      respuestas: [{ 
        0:[{contenido: 'x', correcto: false}], 
        1:[{contenido: '-x', correcto: false}],
        2:[{contenido: '5x', correcto: true}],
        3:[{contenido: '-5x', correcto: false}]
    }] },
    {
      contenido: 'Best girl de hololive EN', dificultad: 1, procedimiento: true, unidadid: 1, temaid:1,
      respuestas: [{ 
        0:[{contenido: 'Ina', correcto: true}], 
        1:[{contenido: 'Mumei', correcto: false}],
        2:[{contenido: 'Gura', correcto: false}],
        3:[{contenido: 'Cali', correcto: false}]
    }] },
  ]

  isCollapsed = true;
  temas: Array<any> = [];
  preguntas: Array<any> = [];
  unidadID: any;
  temaID: any;
  closeResult = '';

  cambiarUnidad(e: any) {
    //this.temas = this.tema.find((unidadid: any) => unidadid.nombre == unidad.target.value);
    this.unidadID=null;
    this.temas=[];

    for (let i = 0; i < this.unidad.length; i++) {
      if (this.unidad[i].nombre == e.target.value) {
        this.unidadID = this.unidad[i].id;
      };
    }

    if (this.unidadID!=null) {
      for (let i = 0; i < this.tema.length; i++) {
        if (this.tema[i].unidadid==this.unidadID) {
          this.temas.push(this.tema[i]);
        }
      }
    }
    
  }

  cambiarTema(e: any){
    this.temaID=null;
    this.preguntas=[];

    for (let i = 0; i < this.tema.length; i++) {
      if (this.tema[i].nombre == e.target.value) {
        this.temaID = this.tema[i].id;
      };
    }

    if (this.temaID!=null) {
      for (let i = 0; i < this.pregunta.length; i++) {
        if (this.pregunta[i].unidadid == this.unidadID && this.pregunta[i].temaid == this.temaID) {
          this.preguntas.push(this.pregunta[i]);
        }
      }
    }
  }
  //this.preguntas = this.unidad.find((undad: any) => undad.id == this.selectedUnidad).temas.find((tma: any) => tma.id == tema.target.value).preguntas;
  //this.cities = this.Countries.find((cntry: any) => cntry.name == this.selectedCountry).states.find((stat: any) => stat.name == state.target.value).cities;

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  check(value: any, dificultad:any){
    if (value==dificultad){
      return true
    }
    return false
  }

}
