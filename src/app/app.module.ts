import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { AddtodosComponent } from './addtodos/addtodos.component';
import { FormatDatePipe } from './format-date.pipe';
import {ColorPickerModule} from 'ngx-color-picker'


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddtodosComponent,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  /* los módulos que quieras importar */
    FormsModule,
    ColorPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
