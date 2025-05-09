import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss']
})
export class FaqItemComponent {
  question = input.required<string>();
  answer = input.required<string>();
  isExpanded = false;

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}
