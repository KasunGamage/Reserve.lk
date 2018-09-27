import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TableBookingFinal } from '../tblebookingFinal/tblebookingFinal';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AlertController } from 'ionic-angular';
import { NavParams} from 'ionic-angular';
//import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'page-tblebookingPinfo',
  templateUrl: 'tblebookingPinfo.html'
})
export class TableBookingPIn {

  cusname: string;
  cusnum: string;
  cusnic: string;
  cuscomments: string;
  db: FirebaseListObservable<any>;
  time :string;
  person: string;
  today: string;

  constructor(public navCtrl: NavController, public af: AngularFire, public alerCtrl: AlertController,private navParams:NavParams) {
    this.db = af.database.list('RestaurantReservation');

    this.time = navParams.get('time');
    this.person = navParams.get('person');
    this.today = navParams.get('today');

  }


  TableBookingFinalPage() {
    this.navCtrl.push(TableBookingFinal);

    this.db.push({
      contact: this.cusnum,
      name: this.cusname,
      nic: this.cusnic,
      comments: this.cuscomments,
      time: this.time,
      person: this.person,
      date: this.today
    });

  }
}
