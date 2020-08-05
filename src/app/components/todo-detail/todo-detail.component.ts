import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../models/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  private id: number;
  todo: Todo;

  constructor(private route: ActivatedRoute, private router: Router, private service: TodoService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.get(this.id);
  }

  get(id: number): void {
    this.service.get(id).subscribe(
      x => {
        this.todo = x;
      }
    );
  }

  list(): void {
    this.router.navigate(['todo/list']);
  }
}
