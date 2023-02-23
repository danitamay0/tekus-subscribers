

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ListSubscriptionsComponent } from './components/list-subscriptions/list-subscriptions.component';

const routes: Routes = [
    {
        path: '',
        component: ListSubscriptionsComponent
    },
    {
        path: 'detail',
        component: ListSubscriptionsComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SubscriptionsRoutingModule { }