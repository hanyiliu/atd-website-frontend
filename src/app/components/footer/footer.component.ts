import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  navLinks = [
    { label: 'About ATD', route: '/about-us', fragment: undefined },
    {
      label: 'Meet Our Board',
      route: '/about-us',
      fragment: 'members-component',
    },
    { label: 'Our Works', route: '/our-works', fragment: undefined },
    {
      label: 'Calendar',
      route: '/home',
      fragment: 'calender-component',
    },
  ];
}
