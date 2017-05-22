import { Component, NgZone, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ProfilePage } from '../pages/profile/profile';
import { SharePage } from '../pages/share/share';

import firebase from 'firebase';

// import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any; //= TabsPage;
  // rootPage: any = LoginPage;
  @ViewChild(Nav) nav: Nav;
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
      splashScreen.hide()
      // this.hideSplash();
    });
  }

  menu_home(Page) {
    this.nav.setRoot(HomePage);
  }

  menu_about() {
    this.nav.setRoot(AboutPage);
  }

  menu_contact() {
    this.nav.setRoot(ContactPage);
  }

  menu_profile() {
    this.nav.setRoot(ProfilePage);
  }

  menu_shares() {
    this.nav.setRoot(SharePage);
  }

}
