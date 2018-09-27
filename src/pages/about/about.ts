import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class About {

  constructor(public navCtrl: NavController) {

  }
  
nextPage()
{
  this.navCtrl.push(About);
}
}