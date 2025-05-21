import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  imports: [CommonModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
})
export class InfoCardComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() details: any[] = [];
}
