import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-our-works-mobile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './our-works-mobile.component.html',
  styleUrl: './our-works-mobile.component.scss',
})
export class OurWorksMobileComponent implements OnInit, OnDestroy {
  frame9: string = '';
  frame10: string = '';
  frame11: string = '';
  frame12: string = '';
  frame13: string = '';
  frame14: string = '';

  images: string[] = [];
  currentImageIndex: number = 0;
  private intervalId: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const content = this.dataService.getContent();
    this.frame9 = content.frame9;
    this.frame10 = content.frame10;
    this.frame11 = content.frame11;
    this.frame12 = content.frame12;
    this.frame13 = content.frame13;
    this.frame14 = content.frame14;

    this.images = [
      this.frame9,
      this.frame10,
      this.frame11,
      this.frame12,
      this.frame13,
      this.frame14,
    ];

    this.intervalId = setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    }, 4000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
}
