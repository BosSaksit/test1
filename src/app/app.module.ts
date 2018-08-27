import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { PCameraPage } from '../pages/p-camera/p-camera';
import { PTtsPage } from '../pages/p-tts/p-tts';
import { PScqrPage } from '../pages/p-scqr/p-scqr';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    PCameraPage,
    PTtsPage,
    PScqrPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    PCameraPage,
    PTtsPage,
    PScqrPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TextToSpeech,
    Camera,
    BarcodeScanner
    
  ]
})
export class AppModule {}
