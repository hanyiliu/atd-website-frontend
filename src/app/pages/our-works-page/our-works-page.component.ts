import { Component } from '@angular/core';
import { OurWorksComponent } from '../../components/our-works/our-works.component';
import { LoopComponent } from '../../components/loop/loop.component';
import { RecentProjectsListComponent } from '../../components/recent-projects-list/recent-projects-list.component';
import { OurWorksMobileComponent } from '../../components/our-works-mobile/our-works-mobile.component';

@Component({
  selector: 'app-our-works-page',
  standalone: true,
  imports: [
    OurWorksComponent,
    OurWorksMobileComponent,
    LoopComponent,
    RecentProjectsListComponent,
  ],
  templateUrl: './our-works-page.component.html',
  styleUrl: './our-works-page.component.scss',
})
export class OurWorksPageComponent {}
