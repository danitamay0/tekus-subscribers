import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addSubscribers, unsetFiltersSubscribers, unsetPaginationSubscribers } from '../../store/actions/subscriptions.actions';
import { subscribersInitialState } from '../../store/reducers/subscribers.feature';

@Component({
  selector: 'tekus-subscribers-header-card',
  templateUrl: './header-card.component.html',
  styles: [],
})
export class HeaderCardComponent {

  constructor(private store: Store) {

  }

  openMenu(type: string) {

  }

  /**
  * Filter to variable and dispatch action to get subscribers
  * @param {{criteria:string}}  
  *  */
  filter(criteria: string) {

    this.store.dispatch(unsetPaginationSubscribers());
    this.store.dispatch(unsetFiltersSubscribers());

    const params = {
      pagination: {
        page: 1,
        count: subscribersInitialState.pagination.pageSize,
        sortOrder: 'PublicId',
        sortType: 1
      },
      filters: { criteria }
    };
    this.store.dispatch(addSubscribers({ params }));
  }
}
