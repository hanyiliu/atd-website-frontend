import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { OurWorksPageComponent } from './pages/our-works-page/our-works-page.component';
import { JoinUsPageComponent } from './pages/join-us-page/join-us-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    data: { title: 'All Things Design' },
  },
  {
    path: 'about-us',
    component: AboutUsPageComponent,
    data: { title: 'About Us - All Things Design' },
  },
  {
    path: 'our-works',
    component: OurWorksPageComponent,
    data: { title: 'Our Works - All Things Design' },
  },
  {
    path: 'join-us',
    component: JoinUsPageComponent,
    data: { title: 'Join Us - All Things Design' },
  },
  { path: '**', redirectTo: '' }, // Wildcard route for 404 pages
];
