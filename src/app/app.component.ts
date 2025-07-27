import {
  Router,
  NavigationEnd,
  NavigationStart,
  ActivatedRoute,
} from '@angular/router';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { routeTransition } from './components/routeTransitions';
import { UserSessionService } from './services/user-session/user-session.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeTransition],
})
export class AppComponent {
  title = 'atd';

  private scrollPositions: Record<string, number> = {};

  constructor(
    private router: Router,
    protected route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
    private userSessionService: UserSessionService
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
    // Example: Check if this is user's first visit to show different content
    if (this.userSessionService.isFirstVisit()) {
      console.log('Welcome! This is your first visit to the website.');
      // You can add special first-visit logic here:
      // - Show welcome animation
      // - Display onboarding tooltips
      // - Track analytics event
    }
  }
}
