import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListSubscriptionsComponent } from './list-subscriptions/list-subscriptions.component';
import { TableSubscribersComponent } from './table-subscribers/table-subscribers.component';

import { SharedComponentsModule } from '@tekus-subscribers/shared-components';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { HeaderCardComponent } from './header-card/header-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormCreateSubscriberComponent } from './form-create-subscriber/form-create-subscriber.component';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    ListSubscriptionsComponent,
    TableSubscribersComponent,
    HeaderCardComponent,
    FormCreateSubscriberComponent,
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule,
    SharedComponentsModule,

    /* AM */
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  exports: [ListSubscriptionsComponent],
  providers: [],
})
export class ComponentsModule { }
