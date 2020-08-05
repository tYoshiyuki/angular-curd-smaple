import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoDetailComponent} from './components/todo-detail/todo-detail.component';
import {TodoAddComponent} from './components/todo-add/todo-add.component';

const routes: Routes = [
  {path: '', redirectTo: 'todo/list', pathMatch: 'full'},
  {path: 'todo/list', component: TodoListComponent},
  {path: 'todo/add', component: TodoAddComponent},
  {path: 'todo/detail/:id', component: TodoDetailComponent},
  {path: '**', redirectTo: 'todo/list'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
