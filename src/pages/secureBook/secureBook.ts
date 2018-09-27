import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SecureBook2 } from '../secureBook2/secureBook2';
import { NavParams} from 'ionic-angular';

@Component({
  selector: 'page-secureBook',
  templateUrl: 'secureBook.html'
})
export class SecureBook {

  today
  tomo
  hotelname: string;
  rmType: string;
  cap: string;
  price: string;



  constructor(public navCtrl: NavController,public modalCtrl: ModalController,private navParams: NavParams) {


    this.hotelname=navParams.get('para1');
    this.rmType=navParams.get('rmtype');
    this.cap=navParams.get('capacity');
    this.price=navParams.get('price');



    this.today = new Date().toISOString();
    this.tomo = new Date().toISOString();
  }


  viewsecurebook2(hotelname,rmType,price,tomo,today)
  {
    this.navCtrl.push(SecureBook2,{hotelname,rmType,price,tomo,today});
  }


}
