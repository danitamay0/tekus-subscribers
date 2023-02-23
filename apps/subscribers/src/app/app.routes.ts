import { Route } from '@angular/router';
import { AuthGuard } from '@tekus-subscribers/auth';

export const appRoutes: Route[] = [
    {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('@tekus-subscribers/auth').then(m => m.AuthModule)
    },

    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }

];
