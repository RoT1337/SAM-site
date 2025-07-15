import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestConfirmedPage } from './request-confirmed.page';

const routes: Routes = [
  {
    path: '',
    component: RequestConfirmedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestConfirmedPageRoutingModule {}
