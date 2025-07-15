import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackReliefRequestPageRoutingModule } from './track-relief-request-routing.module';

import { TrackReliefRequestPage } from './track-relief-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackReliefRequestPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TrackReliefRequestPage]
})
export class TrackReliefRequestPageModule {}
