import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

var login = "58dc1c469624850c66e3421a"

@Injectable()
export class GithubUsers {
  githubApiUrl = 'http://87.44.19.97:3000';

  constructor(public http: Http) { }

  // Load all github users
  load(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/tasks`)
      .map(res => <User[]>res.json());
  }


  // Get github user by providing login(_id)
  loadDetails( _id : string): Observable<User> {
    return this.http.get(`${this.githubApiUrl}/tasks/${login}`)
      .map(res => <User>(res.json()))
    
  }

   // Search for github users  
  searchUsers(searchParam: string): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/tasks`) 
      .map(res => <User[]>(res.json().items))
  }
}
