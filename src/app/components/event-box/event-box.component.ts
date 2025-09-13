import { Component, Input } from '@angular/core';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-box',
  standalone: true,
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss'],
})
export class EventBoxComponent {
  @Input() event: Event = {
    day: '',
    month: '',
    title: '',
    time: '',
    location: '',
  };
  // @Input() day: string = '';
  // @Input() month: string = '';
  // @Input() title: string = '';
  // @Input() time: string = '';
  // @Input() location: string = '';
  @Input() isNext: boolean = false;

  // Display day or day range (e.g., 12–15) when same month range
  get dayDisplay(): string {
    if (this.event.endDay && !this.event.endMonth) {
      return `${this.event.day}–${this.event.endDay}`;
    }
    if (this.event.endDay && this.event.endMonth && this.event.endMonth === this.event.month) {
      return `${this.event.day}–${this.event.endDay}`;
    }
    return this.event.day;
  }

  // Month display: if cross-month range show "Sep 30–Oct 2"; otherwise the single month name
  get monthDisplay(): string {
    if (this.event.endDay && this.event.endMonth && this.event.endMonth !== this.event.month) {
      // Abbreviate months to first 3 letters for compactness
      const startMonthAbbr = this.event.month.slice(0, 3);
      const endMonthAbbr = this.event.endMonth.slice(0, 3);
      return `${startMonthAbbr} ${this.event.day}–${endMonthAbbr} ${this.event.endDay}`;
    }
    return this.event.month;
  }
}
