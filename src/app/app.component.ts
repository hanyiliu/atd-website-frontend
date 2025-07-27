import {
  Router,
  NavigationEnd,
  NavigationStart,
  ActivatedRoute,
} from '@angular/router';
import { Component, Inject, PLATFORM_ID, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { CommonModule } from '@angular/common';
import { routeTransition } from './components/routeTransitions';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, LoadingIndicatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeTransition],
})
export class AppComponent implements OnInit {
  title = 'atd';

  // Loading overlay state management
  showLoadingOverlay = true;
  isLoadingFadingOut = false;
  
  // Loading indicator animation duration
  private readonly LOADING_ANIMATION_DURATION = 5500; // 5.5 seconds (unfortunately hardcoded because the duration in loading-indicator also includes off-screen animation that isn't visible)
  private readonly FADE_OUT_DURATION = 1000; // 1 second

  private scrollPositions: Record<string, number> = {};

  constructor(
    private router: Router,
    protected route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.router.events.subscribe((event) => {
      if (!isPlatformBrowser(this.platformId)) return;

      if (event instanceof NavigationStart) {
        // Save current scroll position before navigating away
        const currentUrl = this.router.url.split('?')[0].split('#')[0];
        this.scrollPositions[currentUrl] = window.scrollY;
      }

      if (event instanceof NavigationEnd) {
        
        const fragment = this.router.parseUrl(event.urlAfterRedirects).fragment;

        // HIGHEST PRIORITY: Handle fragment scrolling
        if (fragment) {
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              const offset = 200; // Your desired offset in pixels
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition =
                elementPosition + window.pageYOffset - offset;

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
              });
            }
          }, 100); // Delay to ensure the element is rendered
        } else {
          // If no fragment, fall back to your scroll restoration logic
          const newUrl = event.urlAfterRedirects.split('?')[0].split('#')[0];
          const savedScroll = this.scrollPositions[newUrl];

          if (savedScroll !== undefined) {
            setTimeout(() => window.scrollTo(0, savedScroll), 0);
          } else {
            // Default: If no saved position, scroll to top
            setTimeout(() => window.scrollTo(0, 0), 0);
          }
        }
      }
    });
  }

  ngOnInit(): void {
    // Only initialize loading overlay in browser environment (not during SSR)
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Disable scrolling when loading overlay is visible
    this.disableScroll();

    // Set CSS custom property for fade-out duration (convert ms to seconds)
    const fadeOutDurationSeconds = this.FADE_OUT_DURATION / 1000;
    this.elementRef.nativeElement.style.setProperty('--fade-out-duration', `${fadeOutDurationSeconds}s`);

    // Start fade-out after loading animation completes
    setTimeout(() => {
      this.isLoadingFadingOut = true;
      
      // Remove overlay completely after fade-out completes
      setTimeout(() => {
        this.showLoadingOverlay = false;
        this.isLoadingFadingOut = false;
        
        // Re-enable scrolling when loading is completely finished
        this.enableScroll();
      }, this.FADE_OUT_DURATION);
      
    }, this.LOADING_ANIMATION_DURATION);
  }

  /**
   * Disables page scrolling by adding 'no-scroll' class to body element
   * Uses Angular's Renderer2 for safe DOM manipulation
   */
  private disableScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(this.document.body, 'no-scroll');
    }
  }

  /**
   * Enables page scrolling by removing 'no-scroll' class from body element
   * Uses Angular's Renderer2 for safe DOM manipulation
   */
  private enableScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.removeClass(this.document.body, 'no-scroll');
    }
  }
}
