import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'firebase-angular-crud';
  constructor(private analytics: AngularFireAnalytics) {}
  ngOnInit() {
    this.analytics.logEvent('users');
  }
}
