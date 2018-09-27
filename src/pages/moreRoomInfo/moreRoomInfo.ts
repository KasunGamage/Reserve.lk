import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ViewRoom } from '../viewRoom/viewRoom';
import {NavParams} from 'ionic-angular';

@Component({
  selector: 'page-moreRoomInfo',
  templateUrl: 'moreRoomInfo.html'
})
export class MoreRoomInfo {



  hname : string;
  facility : string;

  constructor(public viewCtrl: ViewController,private navParams: NavParams) {

    this.hname = navParams.get('parameter2');
    this.facility = navParams.get('parameter5');

  }

  closeModal()
  {


    this.viewCtrl.dismiss();


  }



}
