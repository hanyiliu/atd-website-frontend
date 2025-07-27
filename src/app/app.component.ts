import {
  Router,
  NavigationEnd,
  NavigationStart,
  ActivatedRoute,
} from '@angular/router';
import { Component, Inject, PLATFORM_ID, OnInit, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { CommonModule } from '@angular/common';
import { routeTransition } from './components/routeTransitions';
import { UserSessionService } from './services/user-session/user-session.service';

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
    private userSessionService: UserSessionService,
    private elementRef: ElementRef
  ) {
    this.router.events.subscribe((event) => {
      if (!isPlatformBrowser(this.platformId)) return;

      if (event instanceof NavigationStart) {
        // Save current scroll position before navigating away
        const currentUrl = this.router.url.split('?')[0].split('#')[0];
        this.scrollPositions[currentUrl] = window.scrollY;
      }

      if (event instanceof NavigationEnd) {
        this.userSessionService.markAsVisited();
        
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

    // Set CSS custom property for fade-out duration (convert ms to seconds)
    const fadeOutDurationSeconds = this.FADE_OUT_DURATION / 1000;
    this.elementRef.nativeElement.style.setProperty('--fade-out-duration', `${fadeOutDurationSeconds}s`);

    // Initialize user session service in browser environment
    this.userSessionService.initializeSession();

    // Initialize loading overlay for first-time visitors
    if (this.userSessionService.isFirstVisit()) {
      this.showLoadingOverlay = true;
      
      // Start fade-out after loading animation completes
      setTimeout(() => {
        this.isLoadingFadingOut = true;
        
        // Remove overlay completely after fade-out completes
        setTimeout(() => {
          this.showLoadingOverlay = false;
          this.isLoadingFadingOut = false;
        }, this.FADE_OUT_DURATION);
        
      }, this.LOADING_ANIMATION_DURATION);
    } else {
      this.showLoadingOverlay = false;
    }
  }
}
