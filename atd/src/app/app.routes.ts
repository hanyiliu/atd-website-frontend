import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { OurWorksPageComponent } from './pages/our-works-page/our-works-page.component';
import { JoinUsPageComponent } from './pages/join-us-page/join-us-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'our-works', component: OurWorksPageComponent },
  { path: 'join-us', component: JoinUsPageComponent },
  { path: '**', redirectTo: '/home' } // Wildcard route for 404 pages
];
