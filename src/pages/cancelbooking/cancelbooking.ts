import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Option } from '../option/option';


@Component({
  selector: 'page-cancelbooking',
  templateUrl: 'cancelbooking.html'
})
export class CancelBooking {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Canceled!',
      subTitle: 'Your booking was canceled!',
      buttons: ['OK']
    });
    alert.present();
  }

OptionPage3()
{    
    this.navCtrl.push(Option);
}
}
