import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-our-works-mobile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './our-works-mobile.component.html',
  styleUrl: './our-works-mobile.component.scss',
})
export class OurWorksMobileComponent implements OnDestroy {
  frame9: string = '';
  frame10: string = '';
  frame11: string = '';
  frame12: string = '';
  frame13: string = '';
  frame14: string = '';

  images: string[] = [];
  currentImageIndex: number = 0;
  private intervalId: any;

  constructor(private dataService: DataService, private ngZone: NgZone) {}

  ngOnInit(): void {
    const content = this.dataService.getContent();
    this.images = [
      content.frame9,
      content.frame10,
      content.frame11,
      content.frame12,
      content.frame13,
      content.frame14,
    ];
    // Use ngZone.runOutsideAngular for safe interval
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.nextImage();
        });
      }, 4000);
    });
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

  // For sliding peek carousel
  get prevIndex(): number {
    return (
      (this.currentImageIndex - 1 + this.images.length) % this.images.length
    );
  }
  get nextIndex(): number {
    return (this.currentImageIndex + 1) % this.images.length;
  }
  /**
   * Amount to translate the carousel for the sliding effect.
   * Returns a number (not a string) representing the percentage shift.
   * Used directly in the template as a number to be interpolated as "-X%".
   */
  get translateX(): number {
    // Each image is 100% width, so shift by -100% * current index
    return this.currentImageIndex * 100;
  }
}
