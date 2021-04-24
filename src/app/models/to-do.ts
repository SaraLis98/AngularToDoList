import { ToDoStatus } from "./to-do-status";

export interface ToDo {
    id: number; 
    text: string;
    createDate: Date;
    statusId: number;

    status?: ToDoStatus;
}
