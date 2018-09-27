import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Login } from '../login/login';
import { Option } from '../option/option';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import * as firebase from 'firebase';
import {NgForm} from 'angular2/common';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class Signup {

  cname: string;
  email: string;
  pwd: string;
  contact: string;
  nic: string;

  loader: any;
    
  db: FirebaseListObservable<any>;

  public fireAuth: any;
  public userProfile: any;

  constructor(public navCtrl: NavController, navParams: NavParams, public angfire: AngularFire, public alerCtrl: AlertController) {
    this.db = angfire.database.list('customers');
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
  }

  loginPage() {
    this.navCtrl.push(Login);
  }

  /*UserSignup*/
  signUpUser(cname,email,contact,nic,pwd)
  {    
    if(cname == null || email == null || contact == null || nic == null || pwd == null)
    {
      this.showErrorAlert();
    }

    else
    {
      /*UserSignUp*/
      this.db.push
      ({
        contact: this.contact,
        email: this.email,
        name: this.cname,
        pword: this.pwd,
        //uname: this.uname,
        nic: this.nic
      });

      /*Alert*/ 
      let alert = this.alerCtrl.create
      ({
        title: 'Thank You!',
        subTitle: 'You have successfully signed up.',
        buttons: ['OK'] 
      });
      alert.present();

      /*Navigation*/ 
      this.navCtrl.push(Option);
    }
  }

  /*ErrorAlert*/ 
  showErrorAlert()
  {    
    let alert = this.alerCtrl.create({
      title: 'Error!',
      subTitle: 'Input feilds cannot be empty!',
      buttons: ['OK'] 
    });
    alert.present();
  }

  /*EmailValidation*/
  emailValidator(email:string): boolean 
  {
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!EMAIL_REGEXP.test(email)) 
    {
      return false;
    }
      return true; 
  }
  

  
}