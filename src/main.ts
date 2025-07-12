import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

// bootstrapApplication(AppComponent, {
//   providers: [
//     // This provides routing and enables our custom scrolling
//     provideRouter(
//       routes,
//       withInMemoryScrolling({
//         anchorScrolling: 'enabled',
//         scrollPositionRestoration: 'disabled',
//       })
//     ),
//   ],
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
