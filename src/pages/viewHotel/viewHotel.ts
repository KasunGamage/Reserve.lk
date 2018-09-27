import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ViewRoom } from '../viewRoom/viewRoom';
import { MoreRoomInfo } from '../moreRoomInfo/moreRoomInfo';
import { SecureBook } from '../secureBook/secureBook';
import { Cancleroombooking } from '../cancleroombooking/cancleroombooking';
import { ChooseAcc } from '../chooseAcc/chooseAcc';
import { Hotel_description } from '../hotel_description/hotel_description';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { NavController , NavParams } from 'ionic-angular';


@Component({
  selector: 'page-viewHotel',
  templateUrl: 'viewHotel.html'
})


export class ViewHotel {

  //declare variables

  parameter1: string;
  parameter2: string;
  parameter3: string;
  parameter4: string;
  parameter5: string;
  parameter6: string;
  parameter7: string;
  parameter8: string;
  parameter9: string;
  buttonColor: string = 'inherit';

  today
  tomo

  hhotel: FirebaseListObservable<any>; //Get single entries out of the result to a array


  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public modalCtrl: ModalController,public af: AngularFire, private navParams: NavParams) {
    this.parameter1 = navParams.get('param1'); //hotel_img1
    this.parameter2 = navParams.get('param2'); //hotel_name
    this.parameter3 = navParams.get('param3'); //hotel_address
    this.parameter4 = navParams.get('param4'); //hotel_description
    this.parameter5 = navParams.get('param5'); //hotel_features
    this.parameter6 = navParams.get('param6'); //hotel_img2
    this.parameter7 = navParams.get('param7'); //hotel_img3
    this.parameter8 = navParams.get('param8'); //hotel_img4
    this.parameter9 = navParams.get('param9'); //hotel_img5


    this.today = new Date().toISOString(); // get current date
    this.tomo = new Date().toISOString(); // get tommorrow date

    this.hhotel=af.database.list('hoteldetails'); //access hoteldetails table
  }


  viewRoomPage(para1,para2) //pass hotel_name && hotel_img1 to the viewRoom page
  {
    this.navCtrl.push(ViewRoom,{para1,para2});
  }

  chooseAccPage()
  {
    this.navCtrl.push(ChooseAcc);
  }

  showConfirm()
  {

    let confirm = this.alertCtrl.create({
      title: 'Add Favourite?',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
            this.buttonColor = 'inherit';
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Agree clicked');
            this.buttonColor = '#345465';
          }
        }
      ]
    });
    confirm.present();


  }

  presentModal(parameter2,parameter5)
  {


    let modal = this.modalCtrl.create(MoreRoomInfo,{parameter2,parameter5});
    modal.present();


  }

  showhoteldescription(parameter2,parameter4)
  {


    let modal = this.modalCtrl.create(Hotel_description,{parameter2,parameter4});
    modal.present();


  }


  secureBookPage()
  {
    this.navCtrl.push(SecureBook);
  }

  cancleroombooking(){
    this.navCtrl.push(Cancleroombooking);
  }
}




