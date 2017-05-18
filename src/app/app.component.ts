import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

import firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any; //= TabsPage;
  public zone: NgZone;

  constructor(platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.zone = new NgZone({});
    const config = {
      apiKey: "AIzaSyCKecasRK55n_ou3-aIPPJkQ79qKprtKSk",
      authDomain: "parrot-9bb6b.firebaseapp.com",
      databaseURL: "https://parrot-9bb6b.firebaseio.com",
      projectId: "parrot-9bb6b",
      storageBucket: "parrot-9bb6b.appspot.com",
      messagingSenderId: "848582726274"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
      this.zone.run(() => {
        if (!user) {
          this.rootPage = 'LoginPage';
        } else {
          this.rootPage = HomePage;
        }
      });
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
