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
        position: 'absolute',
        width: '100%',
      }),
      { optional: true }
    ),
    group([
      query(':leave', [animate('500ms ease', style({ opacity: 0 }))], {
        optional: true,
      }),
      query(
        ':enter',
        [style({ opacity: 0 }), animate('500ms ease', style({ opacity: 1 }))],
        { optional: true }
      ),
    ]),
  ]),
]);
