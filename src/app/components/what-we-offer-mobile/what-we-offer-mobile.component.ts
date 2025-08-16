import { Component, OnInit } from '@angular/core';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';
import { CommonModule } from '@angular/common';
import { OfferItem } from '../../models/offer-item.model';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-what-we-offer-mobile',
  standalone: true,
  imports: [CommonModule, ToggleButtonComponent],
  templateUrl: './what-we-offer-mobile.component.html',
  styleUrl: './what-we-offer-mobile.component.scss',
})
export class WhatWeOfferComponentMobile implements OnInit {
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
