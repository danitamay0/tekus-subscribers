

import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component';

export const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }