import {
  Router,
  NavigationEnd,
  NavigationStart,
  ActivatedRoute,
} from '@angular/router';
import { Component, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { routeTransition } from './components/routeTransitions';
//Lenis is for smooth scrolling
import Lenis from '@studio-freight/lenis';

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
  private lenis: Lenis | undefined;

  constructor(
    private router: Router,
    protected route: ActivatedRoute,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
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
}
