

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSubscriptionsComponent } from './list-subscriptions/list-subscriptions.component';

@NgModule({
    declarations: [ListSubscriptionsComponent],
    imports: [ CommonModule ],
    exports: [ListSubscriptionsComponent],
    providers: [],
})
export class ComponentsModule {}