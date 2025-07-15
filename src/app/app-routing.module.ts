import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'request-confirmed',
    loadChildren: () => import('./request-confirmed/request-confirmed.module').then( m => m.RequestConfirmedPageModule)
  },
  {
    path: 'track-relief-request',
    loadChildren: () => import('./track-relief-request/track-relief-request.module').then( m => m.TrackReliefRequestPageModule)
  },
  {
    path: 'relief-status',
    loadChildren: () => import('./relief-status/relief-status.module').then( m => m.ReliefStatusPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
