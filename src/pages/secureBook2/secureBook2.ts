import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecureBook3 } from '../secureBook3/secureBook3';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AlertController } from 'ionic-angular';
import { NavParams} from 'ionic-angular';
//import { UsernameValidator } from  '../../validators/username';
//import {EmailValidator} from  '../../validators/email';

@Component({
  selector: 'page-securebook2',
  templateUrl: 'securebook2.html'
})
export class SecureBook2{

  Form1: FormGroup;
  submitAttempt: boolean = false;

  rfname: string;
  rlname: string;
  remail: string;
  rbookop: string;
  rmobile: string;
  rhname:string;
  rtype:string;
  rprice:string;
  rcheckin:string;
  rcheckout:string;
  // resid  :any = 1 ;


  hotel: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,public formBuilder: FormBuilder, public af: AngularFire, public alerCtrl: AlertController,private navParams: NavParams) {

    this.hotel = af.database.list('reservation');
    this.rhname=navParams.get('hotelname');
    this.rtype=navParams.get('rmType');
    this.rprice=navParams.get('price');
    this.rcheckout=navParams.get('tomo');
    this.rcheckin=navParams.get('today');


    this.Form1= formBuilder.group
    ({
      firstName: ['', Validators.compose([Validators.maxLength(30),Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'),Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30),Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'),Validators.required])],
      mobile: ['', Validators.compose([Validators.maxLength(10),Validators.minLength(10), Validators.pattern('[0-9 ]*'),Validators.required])],
      email: ['', Validators.compose([Validators.maxLength(25),Validators.minLength(3),Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),Validators.required])],
      bookop: ['',Validators.compose([Validators.required])],


    });


  }


  viewsecurebook3(remail)
  {
    this.submitAttempt = true;

    if(this.Form1.valid)
    {

      this.hotel.push({
        //

        //   resid:this.resid,
        r_hotelname: this.rhname,
        r_roomtype: this.rtype,
        r_price :this.rprice,
        r_checkout : this.rcheckout,
        r_checkin : this.rcheckin,
        r_firstname: this.rfname,
        r_lastname: this.rlname,
        r_email	: this.remail,
        r_mobile: this.rmobile,
        r_bookfor: this.rbookop,

        /*
         *
         r_hname: this.rhname,
         r_htype: this.rtype,
         r_price :this.rprice,
         r_checkout : this.rcheckout,
         r_checkin : this.rcheckin,
         r_fname: this.rfname,
         r_lname: this.rlname,
         r_email: this.remail,
         r_mobile: this.rmobile,
         r_bookop: this.rbookop,
         *
         *
         * */



        //this.resid=this.resid+1;

      });



      let alert = this.alerCtrl.create({
        title: 'Thank You!',
        subTitle: 'You have successfully reserved !.',
        buttons: ['OK']
      });
      alert.present();



      this.navCtrl.push(SecureBook3,{remail});
    }

    else {
      console.log("success!")
    }

  }



}
