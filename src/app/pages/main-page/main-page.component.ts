import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { DefinitionBoxComponent } from '../../components/definition-box/definition-box.component';
import { WhatWeOfferComponent } from '../../components/what-we-offer/what-we-offer.component';
import { EventCalenderBoxComponent } from '../../components/event-calender-box/event-calender-box.component';
import { TeamValuesCarouselComponent } from '../../components/team-values-carousel/team-values-carousel.component';
import { FaqSectionComponent } from '../../components/faq-section/faq-section.component';
import { ContactBoxComponent } from '../../components/contact-box/contact-box.component';
import { WhatWeOfferComponentMobile } from '../../components/what-we-offer-mobile/what-we-offer-mobile.component';

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
    ContactBoxComponent,
    WhatWeOfferComponentMobile,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
