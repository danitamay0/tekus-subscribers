

import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

const routes: Routes = [
    {
        path: '',
        component: FeaturesComponent,
        /*   component: FeaturesComponent, */
        loadChildren: () => import('./subscriptions/subscriptions.module').then(m => m.SubscriptionsModule)
       /*  children: [
            {
                path: '',
                loadChildren: () => import('./subscriptions/subscriptions.module').then(m => m.SubscriptionsModule)

            }
        ]
 */

    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FeaturesRoutingModule { }