import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  buttonClick$ = new BehaviorSubject('bannerSection');
  constructor() {}

  scrollToSection(value: string) {
    this.buttonClick$.next(value);
  }
}
