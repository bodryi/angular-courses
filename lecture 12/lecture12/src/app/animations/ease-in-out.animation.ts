import {animate, state, style, transition, trigger} from '@angular/animations';

export const easeInOutAnimation = trigger('easeInOut', [
  state('inactive', style({transform: 'scale(1)'})),
  state('active', style({transform: 'scale(1.1)'})),
  transition('inactive => active', animate('100ms ease-in')),
  transition('active => inactive', animate('100ms ease-out')),
  transition('void => inactive', [
    style({
      transform: 'scale(0)'
    }),
    animate('0.5s ease-in-out', style({
      transform: 'scale(1)'
    }))
  ]),
  transition('active => void', [
    style({
      transform: 'scale(1.1)',
      opacity: 1
    }),
    animate('0.4s ease-in-out', style({
      transform: 'scale(2)',
      opacity: 0
    }))
  ]),
  transition('inactive => void', [
    style({
      transform: 'scale(1)'
    }),
    animate('0.5s ease-in-out', style({
      transform: 'scale(0)'
    }))
  ])
]);
