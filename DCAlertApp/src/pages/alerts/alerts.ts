import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Alert } from '../../models/alert';


import {  AlertsDetails } from '../../providers/alerts-details';
import { AlertDetailsPage } from '../alert-details/alert-details';

@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})
export class AlertsPage {
  alerts: Alert[];
  


  constructor(public navCtrl: NavController, private alertsDetails: AlertsDetails) {
    alertsDetails.load().subscribe(alerts => {
      this.alerts = alerts.slice().reverse();
      console.log(alerts)
    }) 
  }

  goToDetails(_id: string) {
    this.navCtrl.push(AlertDetailsPage, {_id});
    console.log(_id)
  }

  refresh(){
    this.navCtrl.push(AlertsPage);
  }
  
}