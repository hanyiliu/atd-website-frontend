import { Component, OnInit } from '@angular/core';
import { EventBoxComponent } from '../event-box/event-box.component';
import { Event } from '../../models/event.model';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-event-calender-box',
  standalone: true,
  imports: [EventBoxComponent, CommonModule],
  templateUrl: './event-calender-box.component.html',
  styleUrls: ['./event-calender-box.component.scss'],
})
export class EventCalenderBoxComponent implements OnInit {
  events: Event[] = [];

  // Used by the template to decide whether to show the list or the placeholder
  get hasUpcoming(): boolean {
    return Array.isArray(this.events) && this.events.length > 0;
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const allEvents = this.dataService.getEvents();
    const today = new Date();
    const currentYear = today.getFullYear();
    today.setHours(0, 0, 0, 0); // Set time to midnight to include all events for the current day
    this.events = allEvents.filter((event) => {
      // Create a valid date from the event's day, month, and the current year
      const eventDate = new Date(`${event.month} ${event.day}, ${currentYear}`);
      return eventDate >= today;
    });
  }
}
