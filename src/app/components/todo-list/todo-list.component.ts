import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoService} from '../../services/todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[];

  constructor(private todoService: TodoService, private router: Router) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.todoService.getList().subscribe(
      x => {
        this.todoList = x;
      }
    );
  }

  delete(id: number): void {
    // TODO 未実装
  }

  detail(id: number): void {
    this.router.navigate(['todo/detail', id]);
  }

}
