import { HttpProvider } from './../providers/data/data';
import { MessageHelper } from './../providers/message-helper';
import { Codes } from './../Utils/Codes';
import { DataValidation } from './../Utils/DataValidation';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { StringUtils } from '../Utils/StringUtils';

@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataValidation,
    Codes,
    MessageHelper,
    HttpProvider,
    StringUtils,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
