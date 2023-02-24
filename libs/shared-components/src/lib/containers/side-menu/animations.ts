import { animate, style, transition, trigger } from "@angular/animations";

const enterTransition = transition(':enter', [
    style({
        opacity: 0,
        transform: 'translateX(1px)'
    }),
    animate(200, style({ opacity: 1, transform: 'translateX(0)' }))
]);

const leaveTrans = transition(':leave', [
    style({
        opacity: 1
    }),
    animate(200,
        style({ opacity: 0.5, transform: 'translateX(250px)' }))
])

export const fadeIn = trigger('fadeIn', [
    enterTransition
]);

export const fadeOut = trigger('fadeOut', [
    leaveTrans
]);