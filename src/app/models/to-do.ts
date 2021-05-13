import { ToDoStatus } from "./to-do-status";

export interface ToDo {
    id?: string; 
    text: string;
    createDate: Date;
    statusId: string;

    status?: ToDoStatus;
}
