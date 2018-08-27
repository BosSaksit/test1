import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuPage } from '../../pages/menu/menu';
import { login } from '../../model/model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  login:login;
  
  constructor(public navCtrl: NavController) {
    this.login = new login();
  }
  gotomenu(){
    if(this.login.id == "admin" && this.login.pass == "admin"){
    this.navCtrl.push(MenuPage, {logins:this.login});
  }else{
    alert("ID and Password not found");
  }
  }

}

