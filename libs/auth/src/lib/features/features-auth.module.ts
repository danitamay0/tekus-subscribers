


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { MatIconModule } from '@angular/material/icon';
import { ComponentsLoginModule } from './login/components/components-login.module';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        ComponentsLoginModule,

        /* Material Modules */
        MatIconModule
    ],
    exports: [LoginComponent],
    providers: [],
})
export class FeaturesAuthModule { }