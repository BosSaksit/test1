import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PCameraPage } from '../../pages/p-camera/p-camera';
import { PTtsPage } from '../../pages/p-tts/p-tts';
import { PScqrPage } from '../../pages/p-scqr/p-scqr';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  login:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.login = this.navParams.data.logins;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  gotocamera(){
    this.navCtrl.push(PCameraPage);
  }
  gototts(){
    this.navCtrl.push(PTtsPage);
  }
  gotoscqr(){
    this.navCtrl.push(PScqrPage);
  }

}
