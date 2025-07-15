import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestConfirmedPageRoutingModule } from './request-confirmed-routing.module';

import { RequestConfirmedPage } from './request-confirmed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestConfirmedPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RequestConfirmedPage]
})
export class RequestConfirmedPageModule {}
