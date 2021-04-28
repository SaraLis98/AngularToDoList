import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDo } from '../models/to-do';

@Component({
  selector: 'app-edit-todo-form',
  templateUrl: './edit-todo-form.component.html',
  styleUrls: ['./edit-todo-form.component.css']
})
export class EditTodoFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditTodoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: ToDo) { }

  ngOnInit(): void {
  }
  //Metodo boton cancelar en el edit dialog
  cancel(){
    this.dialogRef.close();
  }
  //Metodo boton guardar en el edit dialog
  onFormSubmit(form: NgForm){

  }
}
