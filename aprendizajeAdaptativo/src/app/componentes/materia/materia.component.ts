import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombreMateria = "Geometria Analitica";
  

  examenes: Array<any> = [
    { nombre: 'Geometria Analitica G-1', id: '1234', presentados: 15, asignados: 30, disponible: true },
    { nombre: 'Geometria Analitica G-2', id: '1123', presentados: 23, asignados: 25, disponible: false},
  ];


}
