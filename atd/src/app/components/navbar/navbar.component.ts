import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isAboutUsActive: boolean = false;
  isOurWorksActive: boolean = false;
  isJoinUsActive: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Listen to router events to update active states
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateActiveStates(event.url);
      });

    // Set initial active state
    this.updateActiveStates(this.router.url);
  }

  private updateActiveStates(url: string) {
    this.isAboutUsActive = url.includes('/about-us');
    this.isOurWorksActive = url.includes('/our-works');
    this.isJoinUsActive = url.includes('/join-us');
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  toggleAboutUs() {
    this.navigateTo('/about-us');
  }

  toggleOurWorks() {
    this.navigateTo('/our-works');
  }

  toggleJoinUs() {
    this.navigateTo('/join-us');
  }
}
