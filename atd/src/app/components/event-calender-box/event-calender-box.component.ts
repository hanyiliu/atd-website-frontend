import { Component, Input } from '@angular/core';
import { EventBoxComponent } from '../event-box/event-box.component';
import { Event } from './event.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-calender-box',
  standalone: true,
  imports: [EventBoxComponent, CommonModule],
  templateUrl: './event-calender-box.component.html',
  styleUrl: './event-calender-box.component.scss',
})
export class EventCalenderBoxComponent {
  @Input() events: Event[] = [];
}
