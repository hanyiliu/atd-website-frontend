import { Component, OnInit, OnDestroy } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { NavigationService } from '../../services/navigation/navigation.service';
import { filter, takeUntil } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent, CommonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAboutUsActive: boolean = false;
  isOurWorksActive: boolean = false;
  isJoinUsActive: boolean = false;
  isMobile: boolean = false;
  isMobileMenuOpen: boolean = false;

  // Subject that will emit when the component is destroyed
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    // Listen to router events to update active states
    this.router.events

      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event: NavigationEnd) => {
        this.updateActiveStates(event.url);
      });

    // Set initial active state
    this.updateActiveStates(this.router.url);

    // Monitor mobile breakpoint for hamburger menu
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.isMobile = result.matches;
        if (!this.isMobile) {
          this.isMobileMenuOpen = false; // Close menu when switching to desktop
        }
      });
  }

  // Cleanup method to prevent memory leaks
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private updateActiveStates(url: string) {
    this.isAboutUsActive = url.includes('/about-us');
    this.isOurWorksActive = url.includes('/our-works');
    this.isJoinUsActive = url.includes('/join-us');
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    // Close mobile menu after navigation
    if (this.isMobile) {
      this.isMobileMenuOpen = false;
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleAboutUs() {
    this.navigationService.setAboutUsActive(true);
    this.navigateTo('/about-us');
  }

  toggleOurWorks() {
    this.navigateTo('/our-works');
  }

  toggleJoinUs() {
    this.navigateTo('/join-us');
  }
}
