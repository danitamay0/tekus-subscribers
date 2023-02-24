import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { SubscriptionsRoutingModule } from './subscriptions.routing.module';

import { SubscriptionsComponent } from './subscriptions.component';

import { featuresReducers } from './store/index.features';
import { EfectsList } from './store/effects';
import { ComponentsModule } from './components/components.module';

@NgModule({
    declarations: [SubscriptionsComponent],
    imports: [CommonModule, SubscriptionsRoutingModule,
        ComponentsModule,

        ...featuresReducers,
        EffectsModule.forFeature(EfectsList),

    ],
    exports: [],
    providers: [],
})
export class SubscriptionsModule { }