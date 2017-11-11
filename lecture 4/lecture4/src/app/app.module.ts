import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { CounterComponent } from "./components/counter/counter.component";
import { TodoService } from "./services/todo.service";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CounterComponent
  ],
  exports: [

  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
