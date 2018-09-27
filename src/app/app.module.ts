import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';

import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Option } from '../pages/option/option';
import { RoomR } from '../pages/roomr/roomr';
import { About } from '../pages/about/about';
import { Signup } from '../pages/signup/signup';
import { TableR } from '../pages/tabler/tabler';
import { Map } from '../pages/map/map';
import { TableBooking } from '../pages/tablebooking/tablebooking';
import { TableBookingPIn } from '../pages/tblebookingPinfo/tblebookingPinfo';
import { TableBookingFinal } from '../pages/tblebookingFinal/tblebookingFinal';
import { RoomBooking } from '../pages/roombooking/roombooking';
import { AuthService } from '../providers/auth-service';
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


export const config = {
  apiKey: "AIzaSyDKlvQSa2gRWfz34mVgyHi0be9ZJI9GIZE",
  authDomain: "hotel-reservation-1e20d.firebaseapp.com",
  databaseURL: "https://hotel-reservation-1e20d.firebaseio.com",
  projectId: "hotel-reservation-1e20d",
  storageBucket: "hotel-reservation-1e20d.appspot.com",
  messagingSenderId: "477036935713"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Option,
    RoomR,
    About,
    Signup,
    TableR,
    TableBooking,
    TableBookingPIn,
    TableBookingFinal,
    RoomBooking,
    CancelBooking,
    ViewHotel,
    ViewRoom,
    MoreRoomInfo,
    ChooseAcc,
    SecureBook,
    Map,
    Cancleroombooking,
    Hotel_description,
    SecureBook2,
    SecureBook3,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Option,
    RoomR,
    About,
    Signup,
    TableR,
    TableBooking,
    TableBookingPIn,
    TableBookingFinal,
    RoomBooking,
    CancelBooking,
    ViewHotel,
    ViewRoom,
    MoreRoomInfo,
    ChooseAcc,
    SecureBook,
    Map,
    Cancleroombooking,
    Hotel_description,
    SecureBook2,
    SecureBook3,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService
  ]
})
export class AppModule { }
