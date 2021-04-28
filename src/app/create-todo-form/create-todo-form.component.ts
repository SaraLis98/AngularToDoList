import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  addToDo(form :NgForm){
    if (form.invalid) return alert("¡Tiene que añadir una tarea!");
    this.todoService.addToDo(this.toDoInputVal);
    this.toDoInputVal = "";
  }
}

//if (this.toDoInputVal == ""){
  //alert("¡Tiene que escribir algo!");
//} else{
  //this.todoService.addToDo(this.toDoInputVal);
  //this.toDoInputVal = ""; 
//}