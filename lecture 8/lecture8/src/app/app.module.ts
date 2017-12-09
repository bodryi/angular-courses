import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { CounterComponent } from "./components/counter/counter.component";
import { TodoService } from "./services/todo.service";
import { CommonModule } from "@angular/common";
import { AddFormComponent } from './components/add-form/add-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CounterComponent,
    AddFormComponent
  ],
  exports: [

  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
