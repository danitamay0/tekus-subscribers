import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { FeaturesAuthModule } from './features/features-auth.module';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, FeaturesAuthModule],
  providers: []
})
export class AuthModule { }
