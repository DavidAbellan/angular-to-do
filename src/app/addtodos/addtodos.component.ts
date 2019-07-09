import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addtodos',
  templateUrl: './addtodos.component.html',
  styleUrls: ['./addtodos.component.scss']
})
export class AddtodosComponent implements OnInit {
  tarea = '';
  @Output() newTodo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

 addTodo(){
   console.log(this.tarea);
   this.newTodo.emit(this.tarea);
   this.tarea = '';
 }
}
