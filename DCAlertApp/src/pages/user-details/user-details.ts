import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';

import { GithubUsers } from '../../providers/github-users';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  user: User;
  Created_date: string;

  constructor(public navCtrl: NavController, private navParams: NavParams, private githubUsers: GithubUsers) {
    this.Created_date = navParams.get('Created_date');
    githubUsers.loadDetails(this.Created_date).subscribe(user => {
      this.user = user;
      //console.log(Created_date)
    })
  }
}