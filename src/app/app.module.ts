import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modulos
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule} from '@angular/material/icon';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';

// Componentes
import { TodosComponent } from './todos/todos.component';
import { CreateTodoFormComponent } from './create-todo-form/create-todo-form.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { EditTodoFormComponent } from './edit-todo-form/edit-todo-form.component';

import { PipePipe } from './services/pipe.pipe';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CreateTodoFormComponent,
    TodosListComponent,
    EditTodoFormComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
