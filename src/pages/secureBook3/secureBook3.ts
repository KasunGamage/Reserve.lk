import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Option } from '../option/option';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-securebook3',
  templateUrl: 'securebook3.html'
})

export class  SecureBook3{

  // res : string;
  email : string;
  res: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public af: AngularFire,private navParams: NavParams, public alerCtrl: AlertController)
  {
    this.res= af.database.list('reservation');

    this.email=navParams.get('remail');


  }


  cancleBooking(email)
  {

    this.res.remove(email);


    let alert = this.alerCtrl.create({
      title: 'Done!',
      subTitle: 'You have cancled successfully!.',
      buttons: ['OK']
    });
    alert.present();

  }


  viewHotelPage()
  {
    this.navCtrl.push(Option);
  }

}
