import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { sharedComponentsRoutes } from './lib.routes';
import { SideMenuComponent } from './containers/side-menu/side-menu.component';

@NgModule({
  declarations:[SideMenuComponent],
  imports: [CommonModule, RouterModule],
  exports:[SideMenuComponent]
})
export class SharedComponentsModule {}
