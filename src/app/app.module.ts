import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { TodosComponent } from './todos/todos.component';
import { CreateTodoFormComponent } from './create-todo-form/create-todo-form.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { FormsModule } from '@angular/forms';
import { EditTodoFormComponent } from './edit-todo-form/edit-todo-form.component';

import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CreateTodoFormComponent,
    TodosListComponent,
    EditTodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
