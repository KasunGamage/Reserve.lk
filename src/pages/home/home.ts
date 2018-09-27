import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { About } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
loginPage()
{
  this.navCtrl.push(Login);
}

aboutPage()
{
  this.navCtrl.push(About);
}

}
