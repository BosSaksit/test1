import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PTtsPage } from './p-tts';

@NgModule({
  declarations: [
    PTtsPage,
  ],
  imports: [
    IonicPageModule.forChild(PTtsPage),
  ],
})
export class PTtsPageModule {}
