import { Component } from '@angular/core';
import { InfoCardComponent } from '../info-card/info-card.component';

@Component({
  selector: 'app-info-section',
  imports: [InfoCardComponent],
  templateUrl: './info-section.component.html',
  styleUrl: './info-section.component.scss',
})
export class InfoSectionComponent {
  mission: any = {
    title: 'Mission',
    image: '/icons/target.svg',
    details: [
      'To contribute budget-friendly design to all clients.',
      'To strengthen the design community in Davis by bringing all disciplines together as a unified community.',
      'To build an exceptional professional network for members to gain client-based design experience.',
    ],
  };
  vision: any = {
    title: 'Vision',
    image: '/icons/vision.svg',
    details: [
      'Our vision is to build a home where members can grow, flourish, and discover anything they put their minds to.',
    ],
  };
}
