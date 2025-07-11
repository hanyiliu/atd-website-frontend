import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FaqItem } from './faq-item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-item',
  imports: [MatIconModule],
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss'],
})
export class FaqItemComponent {
  @Input() faqItem!: FaqItem;
  isExpanded = false;

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}
