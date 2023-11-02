import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { DataServiceService } from '@app/@shared/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  isLoading = false;

  buttonClickSubscription: Subscription = new Subscription();
  constructor(private apiService: DataServiceService) {
    this.subscribeEvent();
  }

  ngOnInit() {}

  subscribeEvent() {
    this.buttonClickSubscription = this.apiService.buttonClick$.subscribe((res) => {
      if (res) {
        document.getElementById(res)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      } else {
        window.scroll(0, 0);
      }
    });
  }

  ngOnDestroy() {
    this.buttonClickSubscription.unsubscribe();
  }
}
