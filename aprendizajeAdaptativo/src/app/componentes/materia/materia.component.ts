import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AsignaturaService } from 'src/app/servicios/asignaturaService/asignatura.service';
import { AsignaturaInterface } from 'src/app/interfaces/asignatura-interface';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  constructor(
    private asignatura: AsignaturaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has("idAsignatura")){
        this.asignatura.getAsignaturaById(params.get("idAsignatura")).subscribe(
          data=>{
            this.materia = <AsignaturaInterface> data;
          }
        )
      }
    })
  }

  materia: AsignaturaInterface = <AsignaturaInterface>{}
  //nombreMateria = "Geometria Analitica"
  

  examenes: Array<any> = [
    { nombre: 'Geometria Analitica G-1', id: '1234', presentados: 15, asignados: 30, disponible: true },
    { nombre: 'Geometria Analitica G-2', id: '1123', presentados: 23, asignados: 25, disponible: false},
  ];

  linkUnidades(idAsignatura: any){
    this.router.navigate(["/"+idAsignatura, 'materia', 'unidades'])
  }

  linkVerPreguntas(idAsignatura: any){
    this.router.navigate(["/"+idAsignatura, 'materia', 'ver'])
  }

  linkExamen(idAsignatura: any){

  }

}
