import { Component, input} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-faq-item',
  imports: [MatIconModule],
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss'],
})
export class FaqItemComponent {
  question = input.required<string>();
  answer = input.required<string>();
  isExpanded = false;

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}
