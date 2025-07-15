import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackReliefRequestPage } from './track-relief-request.page';

const routes: Routes = [
  {
    path: '',
    component: TrackReliefRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackReliefRequestPageRoutingModule {}
