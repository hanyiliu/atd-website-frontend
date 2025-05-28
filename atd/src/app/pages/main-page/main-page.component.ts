import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/herosection/herosection.component';
import { DefinitionBoxComponent } from '../../components/definition-box/definition-box.component';
import { WhatWeOfferComponent } from '../../components/what-we-offer/what-we-offer.component';
import { EventCalenderBoxComponent } from '../../components/event-calender-box/event-calender-box.component';
import { TeamValuesCarouselComponent } from '../../components/team-values-carousel/team-values-carousel.component';
import { FaqSectionComponent } from '../../components/faq-section/faq-section.component';
import { ContactBoxComponent } from '../../components/contact-box/contact-box.component';
import { Event } from '../../components/event-box/event.model';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    DefinitionBoxComponent,
    WhatWeOfferComponent,
    EventCalenderBoxComponent,
    TeamValuesCarouselComponent,
    FaqSectionComponent,
    ContactBoxComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  studentOffers = [
    {
      title: "Digital Branding & Web Design",
      description: "ATD help create strong online brands that stand out. Our creative team, consisting of graphic designers, media producers, UX/UI designers, and developers, works together to define the brand’s voice and visuals. We also design webpages that increase user engagement."
    },
    {
      title: "Brand Consultation",
      description: "ATD creates campaigns that help promote your brand. From media production to socal media, we ensure your brand’s messages and values connect with your audience. Our goal is to help grow your business with effective and creative marketing methods."
    },
    {
      title: "Social Media Services",
      description: "ATD’s social media services cover everything from content creation and strategy to community management. Whether you are starting from the ground up or expanding, ATD will help you build connections, grow your audience, and boost engagement with the new content you want to share."
    },
    {
      title: "Low-risk. Free of Charge.",
      description: "ATD values trust and amplification, believing that great partnerships start with trust. That is why we offer services at no cost, allowing businesses to experience our passion and professional expertise. We want businesses to feel confident in the value we bring and to invest in success, risk-free."
    }
  ];

  clientOffers = [...this.studentOffers]; // Using the same data for now

  events: Event[] = [
    {
      day: "22", // Changed from date to day
      month: "April",
      title: "Info Night",
      time: "TBD",
      location: "@TBD"
    },
    {
      day: "23", // Changed from date to day
      month: "April",
      title: "Design Challenge Workshop",
      time: "TBD",
      location: "@TBD"
    },
    {
      day: "24", // Changed from date to day
      month: "April",
      title: "Meet the Board",
      time: "TBD",
      location: "@Frenzy Coffee"
    }
  ];

  faqItems = [
    {
      question: "What does ATD do?",
      answer: "ATD is a student-led agency at UC Davis specializing in multidisciplinary design. Our objective is to provide pro-bono design services to local businesses and clients in the greater Sacramento and Bay Area. We also aim to create a space where our members can strengthen their professional network and gain hands-on experience with client-based design projects."
    },
    {
      question: "Do you have to be a student to join ATD?",
      answer: "We do require prospective applicants to be either current or former student at UC Davis. Alumni and Grad students are welcome to apply."
    },
    {
      question: "What services and opportunities does ATD provide?",
      answer: "For clients, ATD provides digital branding, web design, marketing, media production and social media services. ATD is deeply committed to helping local businesses by offering state-of-the-art design and branding solutions at no cost.\n\nFor students, ATD provides an inclusive community of passionate designers who are seeking professional development through student-client experience, community and networking in a safe, inclusive environment."
    },
    {
      question: "How to apply to ATD?",
      answer: "Our job opportunities will be posted on the “Join Us” page of our website. Additionally, we’ll share our openings via Instagram and LinkedIn. More detail regarding the application process coming soon..."
    }
  ];
}
