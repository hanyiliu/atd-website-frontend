import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.scss',
})
export class OfferCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
