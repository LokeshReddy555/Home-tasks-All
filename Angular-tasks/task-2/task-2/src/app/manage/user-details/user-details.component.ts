import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userArray: any;
  constructor(private list: UsersService) { }
  show: boolean = false;
  ngOnInit(): void {
    this.userArray = this.list.getUsers();
  }

  selectedUser?: any;

  onSelect(user: any): void {
    this.selectedUser = user;
  }


}