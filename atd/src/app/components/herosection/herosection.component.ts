import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-herosection',
  imports: [ButtonComponent],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.scss',
})
export class HeroSectionComponent {
  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {}

  toggleAboutUs() {
    this.navigationService.setAboutUsActive(true);
    this.router.navigate(['/about-us']);
  }
}
