import { Component, OnInit } from '@angular/core';
// import { stringify } from '@angular/compiler/src/util';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos:Todo[];
  constructor() { 
    this.localItem = localStorage.getItem('todos') || '{}';
    if(this.localItem == null){
    this.todos = [];
    }
    else{ 
      this.todos = JSON.parse(this.localItem); 
    }
  }

  ngOnInit(): void {
    
  }

  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log("Delete method has been triggered..");
  }
  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log("Add method has been triggered..");
  }
  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    console.log(index)
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log("Toggle method has been triggered..");
  }
}


// 1:29:36 - completed