import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'; 
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { AsignaturaService } from 'src/app/servicios/asignaturaService/asignatura.service';
import { AsignaturaInterface } from 'src/app/interfaces/asignatura-interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  
  constructor(private modalService: NgbModal,
    private formBuilder: FormBuilder,
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
    idAsignatura: new FormControl("5"),
    idProfesor: new FormControl("1"),
    descAsignatura: new FormControl("una descripcion"),
  })
  closeResult = ''


  guardar(){
    console.log(this.materia.value)
    this.asignatura.postAsignatura(this.materia.value).subscribe(data=>console.log(data));
  }

  /*
  generarId(){
    for (let i = 0; i < this.materias.length; i++) {
      for (let j = 0; j < this.materias.length; j++) {
        if (i==this.materias[j].idAsignatura) {
          this.materia.controls["idAsignatura"].setValue(i)
        }
      }
    }
  }*/

  //cosas para el modal
  open(content: any) {
    //this.generarId(); 
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

}
