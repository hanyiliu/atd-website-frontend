import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  contactEmail: string = '';
  contactSubject: string = '';
  instagramUrl: string = '';
  linkedinUrl: string = '';
  tiktokUrl: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const content = this.dataService.getContent();
    this.contactEmail = content.contactEmail;
    this.contactSubject = content.contactSubject;
    this.instagramUrl = content.instagramUrl;
    this.linkedinUrl = content.linkedinUrl;
    this.tiktokUrl = content.tiktokUrl;
  }

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
