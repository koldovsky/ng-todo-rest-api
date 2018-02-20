import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Todo } from '../services/todo';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: Observable<Todo[]>;

  constructor(private todoListService: TodolistService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodos();
  }

}
