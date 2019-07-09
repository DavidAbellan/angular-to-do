import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Itodo} from '../../models/Itodo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() data: Itodo [] ;  /* data es el nombre que utiliza el padre para darle valores */
  @Output () deleteTodo = new EventEmitter<number>();
  @Output () completeTodo = new EventEmitter<number>();
  @Output() cambiaColor = new EventEmitter<object>();

  constructor() { }       /* No se pueden ejecutar sentencias, solo crear métodos o propiedades
                          sin this */
  ngOnInit() {
  }
  
  emiteDeleteId(id){
    this.deleteTodo.emit(id);
  }
  emitCompleteId(id){
    this.completeTodo.emit(id);
  }
  emitCambiaColor(id,color){
    this.cambiaColor.emit({id,color});
  }
 
 }


