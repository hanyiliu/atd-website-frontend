import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'atd';
  fadeKey = 1;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const hasFragment = this.router.url.includes('#');
        if (!hasFragment) {
          window.scrollTo(0, 0);
          this.fadeKey = 0;
          setTimeout(() => (this.fadeKey = 1), 0);
        }
      });
  }
}
