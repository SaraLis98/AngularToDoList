import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToDo } from '../models/to-do';
import { ToDoStatus } from '../models/to-do-status';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  status: ToDoStatus[] = [
    {
      id: 1,
      name: "Pendiente"
    },
    {
      id: 2,
      name: "En proceso"
    },
    {
      id: 3,
      name: "Resuelto"
    }
  ];

  list: ToDo[] = [
    {
      id: 1,
      text: "Hola amigo",
      createDate: new Date(),
      statusId: 1,
    },
    {
      id: 2,
      text: "Adiós amigo",
      createDate: new Date(),
      statusId: 3
    }
  ];

  //////
  //_onChangeList :Subject<any> = new Subject<any>();

  constructor() { }

  public getToDos(): ToDo[]{
    return this.list;
  }

  public addToDo(toDoText: string){
    let newToDo: ToDo = {
      id: this.getNewToDoId(),
      text: toDoText,
      createDate: new Date(),
      statusId: 1
    };

    this.list.push(newToDo);
    //this._onChangeList.next("Soy addToDo");
  }

  public deleteToDo(id: number){
    this.list = this.list.filter(item => item.id != id);
    //this._onChangeList.next("Soy deleteToDo");
  }

  public updateToDo(toDo: ToDo){
    let index = this.list.findIndex(i => i.id == toDo.id);
    this.list[index] = toDo;
    //this._onChangeList.next("soy updateToDo");
  }

  private getNewToDoId(): number{
    let biggestId: number = 1;
    this.list.forEach(item => {
      if(item.id > biggestId){
        biggestId = item.id;
      }
    })
    return biggestId + 1;
  }

}
