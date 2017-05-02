import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Alert } from '../models/alert';


@Injectable()
export class AlertsDetails {
  baseUrl = 'http://34.249.84.226:3000';
  alerts: Alert[]

  constructor(public http: Http) { }

  // Load all alerts
  load(): Observable<Alert[]> {
    return this.http.get(`${this.baseUrl}/alerts`)
    .map(res => <Alert[]>res.json());
  }

  


  // Get  Alert by providing login(_id)
  loadDetails(_id: string): Observable<Alert> {
    console.log(_id);
    return this.http.get(`${this.baseUrl}/alerts/${_id}`)
    .map(res => <Alert>(res.json()))
  }

  // Search for Alerts  
  searchAlerts(searchParam: string): Observable<Alert[]> {
    return this.http.get(`${this.baseUrl}/tasks`) 
    .map(res => <Alert[]>(res.json().items))
  }
}
