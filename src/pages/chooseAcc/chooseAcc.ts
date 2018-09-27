import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-chooseAcc',
  templateUrl: 'chooseAcc.html'
})
export class ChooseAcc {

  today
  tomo

  constructor(public navCtrl: NavController) {

    this.today = new Date().toISOString();
    this.tomo = new Date().toISOString();
    //var tomorrow = new Date();
  //  tomo.setDate(tomorrow.getDate() + 1);





  }






}
