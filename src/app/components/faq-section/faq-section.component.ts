import { Component, OnInit } from '@angular/core';
import { FaqItemComponent } from "../faq-item/faq-item.component";
import { FaqItem } from '../../models/faq-item.model';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-faq-section',
  imports: [FaqItemComponent, CommonModule],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss'
})
export class FaqSectionComponent implements OnInit {
  faqItems: FaqItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.faqItems = this.dataService.getFaqItems();
  }
}
