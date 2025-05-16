import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isAboutUsActive: boolean = false;
  isOurWorksActive: boolean = false;
  isJoinUsActive: boolean = false;

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  toggleAboutUs() {
    this.isAboutUsActive = !this.isAboutUsActive;
  }

  toggleOurWorks() {
    this.isOurWorksActive = !this.isOurWorksActive;
  }

  toggleJoinUs() {
    this.isJoinUsActive = !this.isJoinUsActive;
  }
}
