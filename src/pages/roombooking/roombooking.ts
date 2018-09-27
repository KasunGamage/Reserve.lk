import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewHotel } from '../viewHotel/viewHotel';
import { Option } from '../option/option';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-roombooking',
  templateUrl: 'roombooking.html'
})
export class RoomBooking {

  hdetails: FirebaseListObservable<any>;

constructor(public navCtrl: NavController, angFire: AngularFire) {
  this.hdetails = angFire.database.list('/hoteldetails');
}

//ToViewHotel
viewHotelPage()
{
  this.navCtrl.push(ViewHotel);
}

//BackToOption
OptionPage1()
{    
  this.navCtrl.push(Option);
}


}