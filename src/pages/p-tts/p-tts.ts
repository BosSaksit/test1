import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { TextToSpeech,TTSOptions } from '@ionic-native/text-to-speech';

/**
 * Generated class for the PTtsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p-tts',
  templateUrl: 'p-tts.html',
})
export class PTtsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public tts:TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PTtsPage');
  }
  async sayText(text: string){
    try{

      const options: TTSOptions = {
        text,
        rate: 0.9
      }

      const speech = await this.tts.speak(options)
    }
    catch(e){
      console.error(e);
    }
  }

}
