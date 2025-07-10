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
  //will need to come back to update routes in the future
  navLinks = [
    { path: '/about', label: 'About ATD' },
    { path: '/board', label: 'Meet Our Board' },
    { path: '/home/contact', label: 'Contact Us' },
    { path: '/ourWorks', label: 'Our Works' },
    { path: '/home/calendar', label: 'Calendar' },
  ];
}
