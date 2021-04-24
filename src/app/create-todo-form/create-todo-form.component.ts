import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/to-do';
import { ToDoService } from '../services/to-do-service.service';

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.component.html',
  styleUrls: ['./create-todo-form.component.css']
})
export class CreateTodoFormComponent implements OnInit {

  toDoInputVal: string = "";

  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
  }

  addToDo(){
    this.todoService.addToDo(this.toDoInputVal);
  }
}
