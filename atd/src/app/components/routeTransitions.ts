import {
  animate,
  style,
  transition,
  trigger,
  query,
  group,
} from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      style({
        position: 'fixed',
        width: '100%',
        top: '131px',
        left: 0,
        zIndex: 1,
      }),
      { optional: true }
    ),
    group([
      query(':leave', [animate('400ms ease', style({ opacity: 0 }))], {
        optional: true,
      }),
      query(
        ':enter',
        [style({ opacity: 0 }), animate('400ms ease', style({ opacity: 1 }))],
        { optional: true }
      ),
    ]),
  ]),
]);
