import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReliefStatusPage } from './relief-status.page';

const routes: Routes = [
  {
    path: '',
    component: ReliefStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReliefStatusPageRoutingModule {}
