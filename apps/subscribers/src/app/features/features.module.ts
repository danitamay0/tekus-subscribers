import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features.routing.module';
import { SharedComponentsModule } from '@tekus-subscribers/shared-components';

@NgModule({
    declarations: [FeaturesComponent],
    imports: [CommonModule, FeaturesRoutingModule,

        SharedComponentsModule,
    ],
    exports: [],
    providers: [],
})
export class FeaturesModule { }