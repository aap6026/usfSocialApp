import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WineventsPage } from './winevents';

@NgModule({
  declarations: [
    WineventsPage,
  ],
  imports: [
    IonicPageModule.forChild(WineventsPage),
  ],
})
export class WineventsPageModule {}
