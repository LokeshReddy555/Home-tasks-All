import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
@Component({
  selector: 'app-deleted-users',
  templateUrl: './deleted-users.component.html',
  styleUrls: ['./deleted-users.component.css']
})
export class DeletedUsersComponent implements OnInit {

  userArray: any;

  constructor(private list: UsersService) { }

  ngOnInit(): void {
    this.userArray = this.list.getUsers();


  }

}