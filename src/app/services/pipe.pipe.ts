import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from '../models/to-do';

@Pipe({
  name: 'pipeSort'
})
export class PipePipe implements PipeTransform {

  transform(toDoArray: ToDo[], argument: Number): ToDo[] {
    toDoArray = toDoArray || [];
    return toDoArray.sort((todo1, todo2) => {
      if ( argument == 1 ){
        if (todo1.text > todo2.text) return 1;
        if (todo1.text < todo2.text) return -1;
        else return 0;
      } else if ( argument == 2){
        let timea = String(todo1.createDate)
          let seca = timea.substr(timea.indexOf("=")+1, timea.indexOf(",")-18)
          let timeb = String(todo2.createDate)
          let secb = timeb.substr(timeb.indexOf("=")+1, timeb.indexOf(",")-18)
          return Number(secb) - Number(seca);
      } else if ( argument == 3){
        return Number(todo1.statusId) - Number(todo2.statusId);
      } else if ( argument == 4 ){
        if (Number(todo1.statusId) == 2){
          return 0 - Number(todo2.statusId);
        } else if (Number(todo2.statusId) == 2) {
          return Number(todo1.statusId);
        } else {
          return Number(todo1.statusId) - Number(todo2.statusId);
        }
      } else if (argument == 5 ) {
        return - (Number(todo1.statusId) - Number(todo2.statusId));
      } else {
        return 0;
      }
    });
  }
}