import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  about = [
    { description: "Parrot is a communication App that is good for all beautiful reasons. Good for websites, blogs, online stores and other web applications. Used and loved by designers, programmers, CEOs and adventurers." },
    { description: "This mock project was implemented to illustrate use of Firebase Auth, as well as Social Auth for PARROT APP Project" },
  ];

}
