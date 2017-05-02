import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { AlertsPage } from '../pages/alerts/alerts';
import { LoginPage } from '../pages/login/login';
import { AlertsDetails } from '../providers/alerts-details';
import { AuthService } from '../providers/auth-service';
import {AlertDetailsPage } from '../pages/alert-details/alert-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '1:66779048628:android:07100cd8a231bd7c'
  },
  'push': {
    'sender_id': '66779048628',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#ff0000'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    AlertsPage,
    AlertDetailsPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlertsPage,
    AlertDetailsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlertsDetails,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
