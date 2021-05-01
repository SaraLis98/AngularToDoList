import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  _list: ToDo[] = []; //Lista de ToDos vacía

  constructor(private todoService: ToDoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this._list = this.todoService.getToDos();
    // this.todoService._onChangeList.subscribe(e => {
    //   console.log(e);
    //   console.log(this.list);
    //   this.list = this.todoService.getToDos();
    // });
  }

  deleteToDo(id: number){
    if(confirm("¿Está seguro?")){
      this.todoService.deleteToDo(id);
    }
  }

  updateStatusToDo(todo: ToDo){
    this.todoService.updateStatusToDo(todo);
  }

  ///Metodo para editar el ToDo
  editTodo(todo: ToDo){
    let dialogRef = this.dialog.open(EditTodoFormComponent, {
      width: '700px',
      data: {...todo}
    });
  }

  get list(): ToDo[]{
    if(this.historicMode){
      return this._list.filter(i => i.statusId === 3);
    } else{
      return this._list.filter(i => i.statusId != 3);
    }
  }

  changeMode(mode: boolean){
    this.historicMode = mode;
  }
}
