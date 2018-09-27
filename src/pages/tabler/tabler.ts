import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TableBooking } from '../tablebooking/tablebooking';
import { CancelBooking } from '../cancelbooking/cancelbooking';
import { Option } from '../option/option';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import firebase from 'firebase';

@Component({
  selector: 'page-tabler',
  templateUrl: 'tabler.html'
})
export class TableR {  

public countryList:Array<any>;
public loadedCountryList:Array<any>;
public countryRef:firebase.database.Reference;

constructor(public navCtrl: NavController, angFire: AngularFire) 
{  
  this.countryRef = firebase.database().ref('/restaurant');

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

initializeItems(): void {
  this.countryList = this.loadedCountryList;
}

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
    if(v.restaurant_name && q) {
      if (v.restaurant_name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });

  console.log(q, this.countryList.length);

}

TableBookingPage(restaurant_name)
{
  this.navCtrl.push(TableBooking,{restaurant_name});
} 

CancelTblBookingPage()
{
  this.navCtrl.push(CancelBooking);
}

OptionPage2()
{    
    this.navCtrl.push(Option);
}


}