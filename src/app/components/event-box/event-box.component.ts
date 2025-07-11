import { Component, Input } from '@angular/core';
import { Event } from './event.model';

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
}
