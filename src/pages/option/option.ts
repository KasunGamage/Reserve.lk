import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoomR } from '../roomr/roomr';
import { TableR } from '../tabler/tabler';
import { Login } from '../login/login';


@Component({
  selector: 'page-option',
  templateUrl: 'option.html'
})
export class Option {

  constructor(public navCtrl: NavController) {

  }

nextPage()
{
  this.navCtrl.push(RoomR);
}

tablerPage()
{
  this.navCtrl.push(TableR);
}

loginPage()
{
  this.navCtrl.push(Login);
}



}