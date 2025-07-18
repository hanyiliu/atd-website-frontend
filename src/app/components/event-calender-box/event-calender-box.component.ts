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
  styleUrl: './event-calender-box.component.scss',
})
export class EventCalenderBoxComponent implements OnInit {
  events: Event[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.events = this.dataService.getEvents();
  }
}
