import { Component } from '@angular/core';
import { AboutUsHeaderComponent } from '../../components/about-us-header/about-us-header.component';
import { InfoSectionComponent } from '../../components/info-section/info-section.component';
import { VideoSectionComponent } from '../../components/video-section/video-section.component';
import { TeamValuesCarouselComponent } from '../../components/team-values-carousel/team-values-carousel.component';
import { MemberComponentComponent } from '../../components/member-component/member-component.component';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [
    AboutUsHeaderComponent,
    InfoSectionComponent,
    VideoSectionComponent,
    TeamValuesCarouselComponent,
  ],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss',
})
export class AboutUsPageComponent {}
