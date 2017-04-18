import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Alert } from '../../models/alert';

import { AlertsDetails } from '../../providers/alerts-details';

@Component({
  selector: 'page-alert-details',
  templateUrl: 'alert-details.html'
})
export class AlertDetailsPage {
  alert: Alert;
  _id: string;

  constructor(public navCtrl: NavController, private navParams: NavParams, private alertsDetails: AlertsDetails) {
    this._id = navParams.get('_id');
    alertsDetails.loadDetails(this._id).subscribe(alert => {
      this.alert = alert;
      console.log(this._id)
    })
  }
}