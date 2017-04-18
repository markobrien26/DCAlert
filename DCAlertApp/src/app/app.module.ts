import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AlertsPage } from '../pages/alerts/alerts';

import { AlertsDetails } from '../providers/alerts-details';
import {AlertDetailsPage } from '../pages/alert-details/alert-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AlertsPage,
    AlertDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlertsPage,
    AlertDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlertsDetails,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
