import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Store } from '@ngrx/store';
import { SwalService } from '@tekus-subscribers/shared-components';
import { Subscription } from 'rxjs';
import { Subscriber } from '../../models/subscriber';
import { deleteSubscriber } from '../../store/actions/delete-subscription.action';
import { addSubscribers } from '../../store/actions/subscriptions.actions';
import { fetchingSubscribers, selecFiltersSubscribers, selecSubscribers } from '../../store/selectors/subscribers.selector';
import { columnsTableSubscribers } from './data-set';

@Component({
  selector: 'tekus-subscribers-table-subscribers',
  templateUrl: './table-subscribers.component.html',
  styleUrls: ['./table-subscribers.component.scss'],
})
export class TableSubscribersComponent {
  filtersSub: Subscription;
  clientListsSub: Subscription;
  fetchingClientListSub: Subscription;
  filters: any = {};
  isLoading = false;
  pageSize = 10;
  currentPage = 0;
  totalRows = 0;
  dataSource: Subscriber[] = [];
  displayedColumns: string[] = columnsTableSubscribers;



  constructor(
    private store: Store,
    private _swal: SwalService
  ) {

    this.clientListsSub = this.store
      .select(selecSubscribers)
      .subscribe(({ subscribers, pagination }) => {
        this.dataSource = [...subscribers];
        this.totalRows = pagination.length;
        this.currentPage = pagination.page - 1;
      });

    this.filtersSub = this.store
      .select(selecFiltersSubscribers)
      .subscribe(({ filters }) => (this.filters = { ...filters }));

    this.fetchingClientListSub = this.store
      .select(fetchingSubscribers)
      .subscribe(({ fetching }) => (this.isLoading = fetching == 'pending'));

    this.loadData();
  }

  loadData() {
    let filters: any = {};

    for (const prop in this.filters) {
      if (this.filters[prop] != null) {
        filters[prop] = this.filters[prop];
      }
    }
    this.store.dispatch(
      addSubscribers({
        params: { pagination: this.getParams(), filters },
      })
    );
  }


  /**
 * Paginations params
 * @returns {Object} 
 */
  getParams() {
    return {
      count: this.pageSize,
      page: this.currentPage + 1,
      sortOrder: 'PublicId',
      sortType: 1
    };
  }

  /**
 * @param {PageEvent} event Event from mat-paginator when change page
 */
  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.loadData();
  }



  delete(subscriber: Subscriber) {
    this._swal.show({
      icon: 'question',
      title: '¡Antención!',
      text: `¿Está seguro de eliminar a ${subscriber.name} ?`,
      showCancel: true
    }).then(({ isConfirmed }) => {

      if (isConfirmed) {
        this.store.dispatch(deleteSubscriber({ id: subscriber.id }))
      }
    }
    )
  }
}
