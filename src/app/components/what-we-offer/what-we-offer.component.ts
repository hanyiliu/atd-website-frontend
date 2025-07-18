import { Component, Input } from '@angular/core';
import { OfferCardComponent } from '../offer-card/offer-card.component';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';
import { CommonModule } from '@angular/common';
import { OfferItem } from '../../models/offer-item.model';

@Component({
  selector: 'app-what-we-offer',
  standalone: true,
  imports: [CommonModule, OfferCardComponent, ToggleButtonComponent],
  templateUrl: './what-we-offer.component.html',
  styleUrl: './what-we-offer.component.scss',
})
export class WhatWeOfferComponent {
  selected: 'clients' | 'students' = 'clients';

  updateSelection(selection: 'clients' | 'students') {
    this.selected = selection;
  }

  @Input() clientOffers: OfferItem[] = [];
  @Input() studentOffers: OfferItem[] = [];
}
