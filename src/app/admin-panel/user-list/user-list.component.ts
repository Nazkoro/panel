import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  p: number = 1;
  collection?: any = [];
  collection2?: any = [];
  year?: any = ""
  selectedOption: any;


  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((data:any) => {
      console.log(data)
      // @ts-ignore
      data.forEach((item: any) => this.collection.push(item))
    });

  }

  ngOnInit(): void {
    this.collection2 = this.collection
    console.log(this.collection2)
  }

  submitFilter(){
    this.collection = this.collection2
    console.log("current year", this.year)
    console.log(this.selectedOption)
    switch (this.selectedOption) {
      case ">":
        console.log(this.selectedOption);
        this.collection = this.collection.filter((user: any) => user.year != "" && +user.year > +this.year )
        break;
      case "all":
        console.log(this.selectedOption);
        this.collection = this.collection2
        break;
      case ">=":
        console.log(this.selectedOption);
        this.collection = this.collection.filter((user: any) => user.year != "" && +user.year >= +this.year )
        break;
      case "==":
        console.log(this.selectedOption);
        this.collection = this.collection.filter((user: any) => user.year != "" && +user.year == +this.year )
        break;
      case "<=":
        console.log(this.selectedOption);
        this.collection = this.collection.filter((user: any) => user.year != "" && +user.year <= +this.year )
        break;
      case "<":
        console.log(this.selectedOption);
        this.collection = this.collection.filter((user: any) => user.year != "" && +user.year < +this.year )
        break;
      default:
        console.log("Sorry, invalid data");
    }
    console.log("this.selectedOption;", this.collection)

    this.year = "";
  }

  selectTodo(event : any): void {
    console.log(event)
  }

}
