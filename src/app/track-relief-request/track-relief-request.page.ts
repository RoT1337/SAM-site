import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-relief-request',
  templateUrl: './track-relief-request.page.html',
  styleUrls: ['./track-relief-request.page.scss'],
  standalone: false,
})
export class TrackReliefRequestPage {
  requestId: string = '';

  constructor(private router: Router) {}

  trackRequest() {
    // Navigate to relief status page
    this.router.navigate(['/relief-status']);
  }
}