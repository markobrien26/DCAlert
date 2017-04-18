import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';


@Injectable()
export class GithubUsers {
  baseUrl = 'http://87.44.19.97:3000';
  users: User[]

  constructor(public http: Http) { }

  // Load all github users
  load(): Observable<User[]> {
    return this.http.get(`${this.baseUrl}/tasks`)
      .map(res => <User[]>res.json());
  }


  // Get github user by providing login(_id)
  loadDetails(_id: string): Observable<User> {
    console.log(_id);
    return this.http.get(`${this.baseUrl}/tasks/${_id}`)
      .map(res => <User>(res.json()))
  }

   // Search for github users  
  searchUsers(searchParam: string): Observable<User[]> {
    return this.http.get(`${this.baseUrl}/tasks`) 
      .map(res => <User[]>(res.json().items))
  }
}
