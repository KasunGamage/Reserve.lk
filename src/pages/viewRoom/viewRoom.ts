import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { MoreRoomInfo } from '../moreRoomInfo/moreRoomInfo';
import { SecureBook } from '../secureBook/secureBook';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {NavParams} from 'ionic-angular';


@Component({
  selector: 'page-viewRoom',
  templateUrl: 'viewRoom.html'
})

export class ViewRoom {


  hote: string;
  hoteimg: string;

  hroom: FirebaseListObservable<any>;


  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public af: AngularFire, private navParams: NavParams) {

    this.hroom=af.database.list('rooms');

    this.hote = navParams.get('para1');
    this.hoteimg= navParams.get('para2');

  }



  presentModal()
  {
    let modal = this.modalCtrl.create(MoreRoomInfo);
    modal.present();
  }

  secureBookPage(para1,rmtype,capacity,price)
  {
    this.navCtrl.push(SecureBook,{para1,rmtype,capacity,price});
  }



}
