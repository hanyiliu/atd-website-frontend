import { Component, OnInit, OnDestroy } from '@angular/core';
import { GalleryItem } from '../../models/gallery-item.model';
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
export class OurWorksMobileComponent implements OnInit, OnDestroy {
  galleryItems: GalleryItem[] = [];
  currentImageIndex: number = 0;
  private intervalId: any;

  constructor(private dataService: DataService, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.galleryItems = this.dataService.getGalleryItems();
    if (this.galleryItems.length > 1) {
      this.ngZone.runOutsideAngular(() => {
        this.intervalId = setInterval(() => {
          this.ngZone.run(() => {
            this.nextImage();
          });
        }, 4000);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage(): void {
    if (!this.galleryItems.length) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.galleryItems.length;
  }

  prevImage(): void {
    if (!this.galleryItems.length) return;
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.galleryItems.length) % this.galleryItems.length;
  }

  // For sliding peek carousel
  get prevIndex(): number {
    return (
      (this.currentImageIndex - 1 + this.galleryItems.length) % this.galleryItems.length
    );
  }
  get nextIndex(): number {
    return (this.currentImageIndex + 1) % this.galleryItems.length;
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
