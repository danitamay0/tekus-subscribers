import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features.routing.module';
import { SharedComponentsModule } from '@tekus-subscribers/shared-components';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@tekus-subscribers/auth';

@NgModule({
    declarations: [FeaturesComponent],
    imports: [CommonModule, FeaturesRoutingModule,

        SharedComponentsModule,
    ],
    exports: [],
    providers: [

    ],
})
export class FeaturesModule { }