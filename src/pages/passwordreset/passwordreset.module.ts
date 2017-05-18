import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordResetPage } from './passwordreset';

@NgModule({
  declarations: [
    PasswordResetPage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordResetPage),
  ],
  exports: [
    PasswordResetPage
  ]
})
export class PasswordresetModule { }
