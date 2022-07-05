import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  userArray: any;

  constructor(private list: UsersService) { }
  show: boolean = false;
  ngOnInit(): void {
    this.userArray = this.list.getUsers();
  }
}