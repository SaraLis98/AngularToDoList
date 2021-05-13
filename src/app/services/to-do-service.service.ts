import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { ToDo } from '../models/to-do';
import { ToDoStatus } from '../models/to-do-status';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  public toDos: Observable<ToDo[]>;
  public toDosStatus: Observable<ToDoStatus[]>;
  public toDoCollections: AngularFirestoreCollection<ToDo>;
  public toDoStatusCollections: AngularFirestoreCollection<ToDoStatus>;

  constructor(private firestore: AngularFirestore) { 
    this.toDoCollections = this.firestore.collection<ToDo>('ToDo');
    this.toDos = this.toDoCollections.snapshotChanges().pipe(
      map(action => {
        return action.map(res => {
          const data = res.payload.doc.data();
          const id = res.payload.doc.id;
          return {id, ...data};
        });
      }) 
    )
    this.toDoStatusCollections = this.firestore.collection<ToDoStatus>('ToDoStatus');
    this.toDosStatus = this.toDoStatusCollections.snapshotChanges().pipe(
      map(action => {
        return action.map(res => {
          const data = res.payload.doc.data();
          const id = res.payload.doc.id;
          return {id, ...data};
        });
      }) 
    )
  }

  //_onChangeList :Subject<any> = new Subject<any>();

  getToDos(): Observable<ToDo[]> {
    return this.toDos;
    //return this.firestore.collection('ToDo').snapshotChanges();
  }
  
  addToDo(toDoText: string) {
    let data: ToDo = {
      text: toDoText,
      createDate: new Date(),
      statusId: "1"
    }
    return this.firestore.collection('ToDo').add(data);
  }

  public async deleteToDo(id: string){
    const del =  await this.firestore.collection('ToDo').doc(id).delete();
    return del;
  }

  public async editTodo(toDo: ToDo){ 
    return await this.firestore.collection('ToDo').doc(toDo.id).update(toDo);
  }

}
