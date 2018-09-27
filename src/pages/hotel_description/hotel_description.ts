import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {NavController, NavParams} from 'ionic-angular';


@Component({
  selector: 'page-moreRoomInfo',
  templateUrl: 'hotel_description.html'
})
export class Hotel_description {

  hname:string;
  description:string;


  constructor(public viewCtrl: ViewController,public navCtrl: NavController, private navParams: NavParams) {

    this.hname = navParams.get('parameter2');
    this.description = navParams.get('parameter4');
  }
  closeModal()
  {


    this.viewCtrl.dismiss();


  }
}
