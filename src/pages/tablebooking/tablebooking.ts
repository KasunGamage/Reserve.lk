import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TableBookingPIn } from '../tblebookingPinfo/tblebookingPinfo';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { NavParams} from 'ionic-angular';


@Component({
  selector: 'page-tablebooking',
  templateUrl: 'tablebooking.html'
})
export class TableBooking 
{
  time: string;
  person: string;
  today: string;
  db: FirebaseListObservable<any>;

  name : string; 

  constructor( public navCtrl: NavController,public alertCtrl: AlertController,public modalCtrl: ModalController, public af: AngularFire, public alerCtrl: AlertController,private navParams:NavParams) 
  {
    this.db = af.database.list('RestaurantReservation')
    this.today = new Date().toISOString();

    this.name = navParams.get('restaurant_name');
  }

  //ToNextPage
  PInfoPage(time,person,today)
  {
    this.navCtrl.push(TableBookingPIn,{time,person,today});
  }

}
