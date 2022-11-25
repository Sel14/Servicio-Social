import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'; 
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AsignaturaService } from 'src/app/servicios/asignaturaService/asignatura.service';
import { AsignaturaInterface } from 'src/app/interfaces/asignatura-interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private asignatura: AsignaturaService
    ) {
      this.asignatura.getAsignatura().subscribe(
        data=>{
          this.materias = <AsignaturaInterface[]> data;
        }
      )
     }

  ngOnInit(): void {
  }

  //para mostrar los datos
  usuario: any = "Sebastian Echeverria"
  materias: AsignaturaInterface[] = <AsignaturaInterface[]>{};
  /*materias: Array<any> = [
    {nombre: 'Geometria Analitica', id: 'GA01'},
    {nombre: 'Algebra Lineal', id: 'AL01'}
  ]*/
  materia = new FormGroup({
    nombreAsignatura: new FormControl(""),
    idAsignatura: new FormControl(""),
    idProfesor: new FormControl("1"),
    descAsignatura: new FormControl("una descripcion"),
  })
  closeResult = ''
  idProfesor = '1'

  guardar(){
    this.asignatura.postAsignatura(this.materia).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
      )
    window.location.reload()
  }

  
  generarId(){
    var i = this.materias.length + 1
    var st = i.toString()
    this.materia.controls["idAsignatura"].setValue(st)
  }

  //cosas para el modal
  open(content: any) {
    this.generarId(); 
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

  link(idAsignatura: any){
    this.router.navigate(["/"+idAsignatura, 'materia'])
  }
}
