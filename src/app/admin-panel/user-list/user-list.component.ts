import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  // @Input() todos?: Todo[];
  // @Output() selectedTodo = new EventEmitter<Todo>();
  // todos = [{date: "13-01-2020", title: "yummy"},
  //         {date: "13-01-2010", title: "yummy21"},
  //         {date: "13-01-2030", title: "yummy3434"},]
  todos?: any[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data:any) => {
      console.log(data)
      this.todos = data
    });
  }


  selectTodo(event : any): void {
    console.log(event)
    // this.selectedTodo.emit(event)
  }

}
