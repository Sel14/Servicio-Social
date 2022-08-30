import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {
  public unidades = [
    { id: 0, nombre: 'Unidad 1: El nombre de la unidad' },
    { id: 1, nombre: 'Unidad 2: El nombre de esta otra' },
    { id: 2, nombre: 'Unidad 3: El nombre de una más' },
    { id: 3, nombre: 'Unidad 4: El nombre de esta última' }
  ];
  public temas = [
    { id: 0, idUnid: 0, nombre: 'Tema 1: El nombre del tema de la unidad 1' },
    { id: 1, idUnid: 0, nombre: 'Tema 2: El nombre del otro tema de la unidad 1' },
    { id: 2, idUnid: 1, nombre: 'Tema 1: El nombre del tema de la unidad 2' },
    { id: 3, idUnid: 1, nombre: 'Tema 2: El nombre del otro tema de la unidad 2' },    
    { id: 4, idUnid: 2, nombre: 'Tema 1: El nombre del tema de la unidad 3' },
    { id: 5, idUnid: 2, nombre: 'Tema 2: El nombre del otro tema de la unidad 3' },    
    { id: 6, idUnid: 3, nombre: 'Tema 1: El nombre del tema de la unidad 4' },
    { id: 7, idUnid: 3, nombre: 'Tema 2: El nombre del otro tema de la unidad 4' }
  ];

  nuevaunidad: string = ''
  nuevotema: string = ''
  idunidad: number = 4
  idtema: number = 8
  unidadselect: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  agregarUnidad() {
    if (this.nuevaunidad.length > 0) {
      var item = { id: this.idunidad, nombre: this.nuevaunidad };
      this.unidades.push(item)
      this.nuevaunidad = ''
      this.idunidad=this.idunidad+1
    }
  }

  seleccionarUnidad(unidad_seleccionada: number){
    this.unidadselect = unidad_seleccionada
  }

  agregarTema(){
    if (this.nuevotema.length > 0) {
      var item = { id: this.idtema, idUnid: this.unidadselect, nombre: this.nuevotema };
      this.temas.push(item)
      this.nuevotema = ''
      this.idtema=this.idtema+1
    }
  }

  filtrarTemas(){
    return this.temas.filter(tema => tema.idUnid == this.unidadselect)
  }

  eliminarUnidad( eliminar: number){
    this.unidades = this.unidades.filter(unidad => unidad.id != eliminar)
  }

}
