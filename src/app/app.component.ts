import { DataValidation } from './../Utils/DataValidation';
import { Codes } from './../Utils/Codes';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = null;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public codes : Codes, public dataValidation : DataValidation) {
    this.initializeApp();

    //Check if the user is already logged in
    if(this.dataValidation.isEmptyJson(localStorage.getItem(this.codes.LSK_USERNAME))){
        //Go to Login Page
        this.rootPage = "LoginPage";
    } else {
      //Go to Login Page
      this.rootPage = "DashboardTabPage";
    }

  }


  logOut(){
    localStorage.removeItem(this.codes.LSK_USERNAME);
    localStorage.removeItem(this.codes.LSK_PASSWORD);
    localStorage.removeItem(this.codes.LSK_IPADDRESS);
    localStorage.removeItem(this.codes.LSK_USER_INFO_PREFERENCES);
    this.nav.setRoot('LoginPage');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
