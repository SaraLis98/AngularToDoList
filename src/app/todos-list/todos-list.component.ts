import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EditTodoFormComponent } from '../edit-todo-form/edit-todo-form.component';
import { ToDo } from '../models/to-do';
import { ToDoService } from '../services/to-do-service.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  historicMode: boolean = false;
  list: ToDo[] = [];
  value = 0;

  constructor(private todoService: ToDoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    // Subscribe se queda escuchando el observable y por cada dato que aparece actualiza this.list
    this.todoService.getToDos().subscribe(data => {
      this.list = data;
    });
  }

  deleteToDo(id: string | undefined){
     if(confirm("¿Está seguro?")){
      this.todoService.deleteToDo(id!);
    }
  }

  updateStatusToDo(todo: ToDo, statusId: string){
    todo.statusId = statusId;
    this.todoService.editTodo(todo);
  }

  editTodo(todo: ToDo){
    let dialogRef = this.dialog.open(EditTodoFormComponent, {
      width: '700px',
      data: {...todo}
    });
  }

  changeMode(mode: boolean){
    this.historicMode = mode;
  }

  sorting(value: any){
    this.value = value.target.value;
  }

}
