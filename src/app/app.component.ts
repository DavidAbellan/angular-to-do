import { Component } from '@angular/core';
import { Itodo } from '../models/Itodo';
import { ColorPickerComponent } from 'ngx-color-picker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Itodo[] = JSON.parse(localStorage.getItem('todos')) || [];
  changeColor(e) {
    let id = e.id;
    let color = e.color;
    this.todos = this.todos.map(t => { if(t.id == id){
      t.color = color;
    }
    return t;
  })
  this.grabarEnLS();
  } 
 


  addTodo(text) {
    let newTodo: Itodo = {
      id: Math.random() * 999999,
      text,
      complete: false,
      date: new Date(),
      color : 'white'
    }

    this.todos.push(newTodo);
    this.grabarEnLS();
  }
  grabarEnLS() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  borrarToDo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.grabarEnLS();

  }
  todoCompleto(id: number) {
    this.todos.map(t => { 
      if (t.id === id) { 
        t.complete = !t.complete 
      } 
      return t;
    });

    this.grabarEnLS();
  }

}