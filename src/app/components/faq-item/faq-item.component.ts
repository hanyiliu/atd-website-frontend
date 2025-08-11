import { Component, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FaqItem } from '../../models/faq-item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-item',
  imports: [MatIconModule],
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss'],
})
export class FaqItemComponent implements AfterViewInit {
  @Input() faqItem!: FaqItem;
  @ViewChild('faqBody', { static: false }) faqBody!: ElementRef<HTMLDivElement>;
  
  isExpanded = false;
  private actualHeight = 0;

  ngAfterViewInit(): void {
    // Calculate the actual height needed for the content
    this.calculateActualHeight();
  }

  private calculateActualHeight(): void {
    if (this.faqBody) {
      const element = this.faqBody.nativeElement;
      // Temporarily expand to measure actual height
      const originalMaxHeight = element.style.maxHeight;
      const originalOverflow = element.style.overflow;
      
      element.style.maxHeight = 'none';
      element.style.overflow = 'visible';
      this.actualHeight = element.scrollHeight;
      
      // Restore original styles
      element.style.maxHeight = originalMaxHeight;
      element.style.overflow = originalOverflow;
      
      // Set CSS custom property for animations
      element.style.setProperty('--actual-height', `${this.actualHeight}px`);
    }
  }

  toggle(): void {
    this.isExpanded = !this.isExpanded;
    // Recalculate height in case content changed
    setTimeout(() => this.calculateActualHeight(), 0);
  }
}
