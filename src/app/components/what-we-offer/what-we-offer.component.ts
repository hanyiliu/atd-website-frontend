import { Component, OnInit } from '@angular/core';
import { OfferCardComponent } from '../offer-card/offer-card.component';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';
import { CommonModule } from '@angular/common';
import { OfferItem } from '../../models/offer-item.model';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-what-we-offer',
  standalone: true,
  imports: [CommonModule, OfferCardComponent, ToggleButtonComponent],
  templateUrl: './what-we-offer.component.html',
  styleUrl: './what-we-offer.component.scss',
})
export class WhatWeOfferComponent implements OnInit {
  selected: 'clients' | 'students' = 'clients';
  clientOffers: OfferItem[] = [];
  studentOffers: OfferItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.clientOffers = this.dataService.getClientOffers();
    this.studentOffers = this.dataService.getStudentOffers();
  }

  updateSelection(selection: 'clients' | 'students') {
    this.selected = selection;
  }
}
