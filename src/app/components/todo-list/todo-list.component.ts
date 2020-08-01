import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: Array<Todo>;

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.todoService.get().subscribe(
      x => {
        this.todoList = x;
      }
    );
  }

}
