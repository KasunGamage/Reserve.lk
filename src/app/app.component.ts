import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Option } from '../pages/option/option';
import { RoomR } from '../pages/roomr/roomr';
import { About } from '../pages/about/about';
import { Signup } from '../pages/signup/signup';
import { Map } from '../pages/map/map';
import { TableBooking } from '../pages/tablebooking/tablebooking';
import { TableBookingPIn } from '../pages/tblebookingPinfo/tblebookingPinfo';
import { TableBookingFinal } from '../pages/tblebookingFinal/tblebookingFinal';
import { RoomBooking } from '../pages/roombooking/roombooking';
import { CancelBooking } from '../pages/cancelbooking/cancelbooking';
import { ViewHotel  } from '../pages/viewHotel/viewHotel';
import { ViewRoom  } from '../pages/viewRoom/viewRoom';
import { MoreRoomInfo  } from '../pages/moreRoomInfo/moreRoomInfo';
import { ChooseAcc  } from '../pages/chooseAcc/chooseAcc';
import { SecureBook  } from '../pages/secureBook/secureBook';
import { Cancleroombooking } from '../pages/cancleroombooking/cancleroombooking';
import { Hotel_description } from '../pages/hotel_description/hotel_description';
import { SecureBook2 } from '../pages/secureBook2/secureBook2';
import { SecureBook3 } from '../pages/secureBook3/secureBook3';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
 // buttonColor: string = '#000';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

