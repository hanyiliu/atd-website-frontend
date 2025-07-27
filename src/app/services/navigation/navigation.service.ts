import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private aboutUsActiveSubject = new BehaviorSubject<boolean>(false);
  aboutUsActive$ = this.aboutUsActiveSubject.asObservable();

  constructor() {}

  setAboutUsActive(state: boolean): void {
    this.aboutUsActiveSubject.next(state);
  }
}
