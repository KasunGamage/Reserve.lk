import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Option } from '../option/option';
import { Signup } from '../signup/signup';
//import { HomePage } from '../pages/home/home';
import { AngularFire, FirebaseListObservable, AuthMethods, AuthProviders } from 'angularfire2';
import * as firebase from "firebase";
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  public fireAuth: any;

  public email:any;
  public password:any;
  
  db : FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public angfire: AngularFire, public alerCtrl: AlertController) {
    this.fireAuth = firebase.auth();
    
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

  /*LoginErrorAlert*/ 
  showLoginErrorAlert()
  {    
    let alert = this.alerCtrl.create({
      title: 'Error!',
      subTitle: 'Incorrect User Details',
      buttons: ['OK'] 
    });
    alert.present();
  }

  /*login*/
  login(email,password)
  {
    if(email == null || password == null)
    {
      this.showErrorAlert();
    }

    else
    {
      this.angfire.auth.login({
        email: this.email,
        password: this.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then((response) => {
        this.navCtrl.push(Option);
      }).catch((error) => {
        this.showLoginErrorAlert()
      })
    }       
  }

  signupPage()
  {
    this.navCtrl.push(Signup);
  }

  loginPage()
  {
    this.navCtrl.push(Option);
  }

  /*homePage(){
    this.navCtrl.push(HomePage);
  }*/

  loginUser(email: string, pwd: string): any
  {
    return this.fireAuth.signInWithEmailAndPassword(email, pwd);
  }

  logoutUser()
  {
    return this.fireAuth.signOut();
  }

}
