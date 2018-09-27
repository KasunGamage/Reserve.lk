import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Option } from '../option/option';

@Component({
  selector: 'page-tblebookingFinal',
  templateUrl: 'tblebookingFinal.html'
})
export class TableBookingFinal
{
  constructor(public navCtrl: NavController) 
  {
    
  }

nextPage()
{
  this.navCtrl.push(Option);
}

OptionPage2()
{    
    this.navCtrl.push(Option);
}

}