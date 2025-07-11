import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* ... */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // These three options are all important
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'disabled', // <-- Set this to 'disabled' to give full control to our code
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
