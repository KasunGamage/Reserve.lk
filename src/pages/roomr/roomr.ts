import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoomBooking } from '../roombooking/roombooking';
import { Option } from '../option/option';
import { ViewHotel } from '../viewHotel/viewHotel';
import { Map } from '../map/map';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import firebase from 'firebase';


@Component({
  selector: 'page-roomr',
  templateUrl: 'roomr.html'
})
export class RoomR {

  //hdetails: FirebaseListObservable<any>;
  public countryList:Array<any>;
  public loadedCountryList:Array<any>;
  public countryRef:firebase.database.Reference;
  public countryRef1:FirebaseListObservable<any>;

  public min:any;
  public max:any;

  constructor(public navCtrl: NavController, public angFire: AngularFire)
  {
    //this.hdetails = angFire.database.list('/hoteldetails');
    this.countryRef = firebase.database().ref('/hoteldetails');
    this.countryRef1 = angFire.database.list('/hoteldetails');


    this.countryRef.on('value', countryList => {
      let countries = [];
      countryList.forEach( country => {
        countries.push(country.val());
        return false;
      });

      this.countryList = countries;
      this.loadedCountryList = countries;
    });
  }

  initializeItems(): void
  {
    this.countryList = this.loadedCountryList;
  }

  //ItemSearch
  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;


    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    this.countryList = this.countryList.filter((v) => {
      if(v.hotel_name && q) {
        if (v.hotel_name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    console.log(q, this.countryList.length);

  }

  //ItemSearchWithFilters
  filerSearch()
  {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var minV= document.getElementById("min") as HTMLInputElement;
    var maxV= document.getElementById("max") as HTMLInputElement;

    // if the value is an empty string don't filter the items
    if (!this.min && !this.max) {
      return;
    }

    this.countryList = this.countryList.filter((v) => {
      if(v.hotel_budget >= this.min && v.hotel_budget <= this.max)
      {
        return true;
      }
        return false;
    });

    console.log(this.min, this.max, this.countryList.length);
  }

  roombookingpPage()
  {
    this.navCtrl.push(RoomBooking);
  }

  OptionPage2()
  {
    this.navCtrl.push(Option);
  }

  //ToViewHotel
  viewHotelPage(param1,param2,param3,param4,param5,param6,param7,param8,param9)
  {
    this.navCtrl.push(ViewHotel,{param1,param2,param3,param4,param5,param6,param7,param8,param9});
  }

  //ToMap
  MapPage()
  {
    this.navCtrl.push(Map);
  }



}
