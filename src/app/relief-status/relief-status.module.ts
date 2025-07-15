import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReliefStatusPageRoutingModule } from './relief-status-routing.module';

import { ReliefStatusPage } from './relief-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReliefStatusPageRoutingModule
  ],
  declarations: [ReliefStatusPage]
})
export class ReliefStatusPageModule {}
