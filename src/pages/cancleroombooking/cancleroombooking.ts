import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-cancleroombooking',
  templateUrl: 'cancleroombooking.html'
})
export class Cancleroombooking {

  remail: string;
  res: FirebaseListObservable<any>;


  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public af: AngularFire) {

    this.res= af.database.list('reservation');


  }

  doAlert(items)
  {

    this.res.remove(items);





    let alert = this.alertCtrl.create({
      title: 'Canceled!',
      subTitle: 'Your booking was canceled!',
      buttons: ['OK']
    });
    alert.present();
  }

}
