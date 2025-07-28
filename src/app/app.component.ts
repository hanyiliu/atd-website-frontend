import {
  Router,
  NavigationEnd,
  NavigationStart,
  ActivatedRoute,
} from '@angular/router';
import { Component, Inject, PLATFORM_ID, NgZone, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { CommonModule } from '@angular/common';
import { routeTransition } from './components/routeTransitions';
//Lenis is for smooth scrolling
import Lenis from '@studio-freight/lenis';

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
  private lenis: Lenis | undefined;

  constructor(
    private router: Router,
    protected route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private ngZone: NgZone,
    private titleService: Title
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        const content = document.getElementById('main-container');
        if (content) {
          this.lenis = new Lenis({
            content: content,
          });
        }

        const raf = (time: number) => {
          this.lenis?.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      });
    }

    this.router.events.subscribe((event) => {
      if (!isPlatformBrowser(this.platformId)) return;

      if (event instanceof NavigationStart) {
        // Save current scroll position before navigating away
        const currentUrl = this.router.url.split('?')[0].split('#')[0];
        this.scrollPositions[currentUrl] = this.lenis?.scroll || window.scrollY;
      }

      if (event instanceof NavigationEnd) {
        this.lenis?.resize();
        
        // Dynamically update the document title using route data.title
        let route = this.route.firstChild;
        while (route?.firstChild) {
          route = route.firstChild;
        }
        const pageTitle = route?.snapshot.data['title'];
        if (pageTitle) {
          this.titleService.setTitle(pageTitle);
        } else {
          this.titleService.setTitle('All Things Design');
        }
        
        const fragment = this.router.parseUrl(event.urlAfterRedirects).fragment;

        // HIGHEST PRIORITY: Handle fragment scrolling
        if (fragment) {
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              this.lenis?.scrollTo(element, { offset: -200, duration: 1.5 });
            }
          }, 300); // Delay to ensure the element is rendered
        } else {
          const newUrl = event.urlAfterRedirects.split('?')[0].split('#')[0];
          const savedScroll = this.scrollPositions[newUrl];

          if (savedScroll !== undefined) {
            setTimeout(() => {
              this.lenis?.scrollTo(savedScroll, { immediate: true });
            }, 600);
          } else {
            this.lenis?.scrollTo(0, { immediate: true });
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
