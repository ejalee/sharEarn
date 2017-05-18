import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// We import the authentication provider to test the log-out function.
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {
  }

  /**
   * Calls the authentication provider and logs the user out, on successful logout it sends the user
   * back to the login page.
   */
  logMeOut() {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot('HomePage');
    });
  }

}
