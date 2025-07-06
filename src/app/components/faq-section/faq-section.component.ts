import { Component, Input } from '@angular/core';
import { FaqItemComponent } from "../faq-item/faq-item.component";
import { FaqItem } from '../faq-item/faq-item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-section',
  imports: [FaqItemComponent, CommonModule],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss'
})
export class FaqSectionComponent {
  @Input() faqItems!: FaqItem[];
}
