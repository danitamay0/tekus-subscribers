import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { NavbarComponent } from './containers/navbar/navbar.component';
import { LoadingShadeomponent } from './containers/loading-shade/loading-shade.component';
import { SideMenuComponent } from './containers/side-menu/side-menu.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [SideMenuComponent, NavbarComponent, LoadingShadeomponent],
  imports:
    [CommonModule,
      RouterModule,

      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatProgressSpinnerModule
    ],
  exports: [SideMenuComponent, NavbarComponent, LoadingShadeomponent]
})
export class SharedComponentsModule { }
