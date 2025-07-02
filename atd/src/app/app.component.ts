import {
  Router,
  NavigationEnd,
  NavigationStart,
  ActivatedRoute,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { routeTransition } from './components/routeTransitions';

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
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events.subscribe((event) => {
      if (!isPlatformBrowser(this.platformId)) return;

      if (event instanceof NavigationStart) {
        // Save current scroll position before navigating away
        const currentUrl = this.router.url;
        this.scrollPositions[currentUrl] = window.scrollY;
      }

      if (event instanceof NavigationEnd) {
        const newUrl = event.urlAfterRedirects;
        const savedScroll = this.scrollPositions[newUrl];

        // Restore scroll position if available
        if (savedScroll !== undefined) {
          setTimeout(() => window.scrollTo(0, savedScroll), 0);
        }
      }
    });
  }
}
