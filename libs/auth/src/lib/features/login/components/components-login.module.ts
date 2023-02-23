import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/* import { AuthService } from '@tekus-subscribers/auth'; */
import { AuthService } from '../../../core/services/auth.service';

import { FormLoginComponent } from './form-login/form-login.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BannerLoginComponent } from './banner-login/banner-login.component';

@NgModule({
    declarations: [FormLoginComponent, BannerLoginComponent],
    imports: [
        CommonModule,
        HttpClientModule,


        /* MA Modules */
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
    ],
    exports: [FormLoginComponent, BannerLoginComponent],
    providers: [],
})
export class ComponentsLoginModule { }
