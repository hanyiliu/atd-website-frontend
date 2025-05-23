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
    image: '/images/target.svg',
    details: [
      'To contribute exceptional pro-bono design to all clients.',
      'To strengthen the design community at UC Davis by bringing all disciplines together as a unified community.',
      'To build an exceptional professional network for students to gain client-based design experience.',
    ],
  };
  vision: any = {
    title: 'Vision',
    image: '/images/vision.svg',
    details: [
      'Our vision is to build a home where students can grow, flourish and discover anything they put their minds to.',
    ],
  };
}
