import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-confirmed',
  templateUrl: './request-confirmed.page.html',
  styleUrls: ['./request-confirmed.page.scss'],
  standalone: false,
})
export class RequestConfirmedPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToTrackRequest() {
    this.router.navigate(['/track-relief-request']);
  }

  goBackToHome() {
    this.router.navigate(['/home']);
  }

}
