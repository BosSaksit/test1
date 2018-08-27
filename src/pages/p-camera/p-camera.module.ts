import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PCameraPage } from './p-camera';

@NgModule({
  declarations: [
    PCameraPage,
  ],
  imports: [
    IonicPageModule.forChild(PCameraPage),
  ],
})
export class PCameraPageModule {}
