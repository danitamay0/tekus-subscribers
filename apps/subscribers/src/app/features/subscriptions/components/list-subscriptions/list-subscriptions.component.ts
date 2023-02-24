
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SwalService } from '@tekus-subscribers/shared-components';
import { TypeFetching } from 'libs/auth/src/lib/core/interfaces/IFetching';
import { Subscription } from 'rxjs';
import { selecDeleteSubscribers } from '../../store/selectors/delete-subscriber.selector';


@Component({
  selector: 'tekus-subscribers-list-subscriptions',
  templateUrl: './list-subscriptions.component.html',
  styles: [],
})
export class ListSubscriptionsComponent {

  deletingSubscriber: TypeFetching = 'iddle'
  deletinSub: Subscription

  constructor(private store: Store, private _swal: SwalService) {
    this.deletinSub = this.store.select(selecDeleteSubscribers).subscribe(({ fetching }) => {
      this.deletingSubscriber = fetching
      if (fetching == 'succeded' || fetching == 'rejected') {
        this.showAlert(fetching)
      }
    })
  }


  showAlert(fetching: TypeFetching) {
    this._swal.show({
      title: fetching == 'succeded' ? 'Subscriptor eliminado' : 'Ha ocurrido un error',
      text: '',
      icon: fetching == 'succeded' ? 'success' : 'error',
      showCancel: false
    })
  }

  ngOnDestroy(): void {
    this.deletinSub.unsubscribe()
  }
}
