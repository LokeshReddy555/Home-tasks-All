import { Injectable } from '@angular/core';
import { User } from './user-model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getUsers(): any {
    return this.userArray
  }
  // getUserByid(id : string) : any{
  //   return this.userArray.find(ele=> ele.id ===id);
  // }

  constructor() { }
  userArray: Array<User> = ([

    { "id": "One User", "firstName": "user", "lastName": " 1", "age": 21, "login": "wxsd", "password": "sdcscs", "isDeleted": false },
    { "id": "Two User", "firstName": "user", "lastName": " 2", "age": 23, "login": "jnsdbf", "password": "huihweiuy3", "isDeleted": true },
    { "id": "Three User", "firstName": "user", "lastName": " 3", "age": 22, "login": "ksfn", "password": "3jhewjeh", "isDeleted": false },
    { "id": "Four User", "firstName": "user", "lastName": " 4", "age": 22, "login": "knfl", "password": "wjkeh2", "isDeleted": false },
    { "id": "Five User", "firstName": "user", "lastName": " 5", "age": 21, "login": "mersd", "password": "yen", "isDeleted": false },
    { "id": "Six User", "firstName": "user", "lastName": " 6", "age": 24, "login": "rknk", "password": "72t8u", "isDeleted": true },
    { "id": "Seven User", "firstName": "user", "lastName": " 7", "age": 28, "login": "kjewn", "password": "i3ynd", "isDeleted": true },
    { "id": "Eight User", "firstName": "user", "lastName": " 8", "age": 38, "login": "knef", "password": "uehbvd", "isDeleted": false },
    { "id": "Nine User", "firstName": "user", "lastName": " 9", "age": 35, "login": "kjemf", "password": "teyuwgbk", "isDeleted": true },
    { "id": "Ten User", "firstName": "user", "lastName": " 10", "age": 31, "login": "jwhd", "password": "87tyeihn", "isDeleted": false },
  ]);
}