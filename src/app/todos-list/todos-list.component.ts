import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { EditTodoFormComponent } from '../edit-todo-form/edit-todo-form.component';
import { ToDo } from '../models/to-do';
import { ToDoService } from '../services/to-do-service.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  historicMode: boolean = false;
  list = this.todoService.getToDos(); //Lista de ToDos vacía
  listOfTodos: ToDo[] = [];
  value = 0;
  constructor(private todoService: ToDoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.list = this.todoService.getToDos();
    //this.todoFilter();
  }

  deleteToDo(id: string){
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
