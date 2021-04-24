import { Component, OnInit } from '@angular/core';
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

  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
    this._list = this.todoService.getToDos();
    // this.todoService._onChangeList.subscribe(e => {
    //   console.log(e);
    //   console.log(this.list);
    //   this.list = this.todoService.getToDos();
    // });
  }

  deleteToDo(id: number){
    if(confirm("Are you sure?")){
      this.todoService.deleteToDo(id);
    }
  }

  updateToDo(todo: ToDo){
    this.todoService.updateToDo(todo);
  }

  get list(): ToDo[]{
    if(this.historicMode){
      return this._list.filter(i => i.statusId === 3);
    } else{
      return this._list.filter(i => i.statusId != 3);
    }
  }

  changeMode(){
    this.historicMode = !this.historicMode;
  }
}
