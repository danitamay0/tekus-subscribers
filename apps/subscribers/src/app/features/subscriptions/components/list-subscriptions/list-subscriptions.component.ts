
import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { SwalService } from '@tekus-subscribers/shared-components';
import { TypeFetching } from 'libs/auth/src/lib/core/interfaces/IFetching';
import { SideMenuComponent } from 'libs/shared-components/src/lib/containers/side-menu/side-menu.component';
import { Subscription } from 'rxjs';
import { createSubscriberUnset } from '../../store/actions/create-subscription.actions';
import { deleteSubscriberUnset } from '../../store/actions/delete-subscription.action';
import { toggleMenuForm } from '../../store/actions/menu-form-actions';
import { selectCreateSubscriberFeaure } from '../../store/selectors/create-subscriber.selector';
import { selecDeleteSubscribers } from '../../store/selectors/delete-subscriber.selector';
import { selectIsOpenMenuForm } from '../../store/selectors/menu-form-selector';


@Component({
  selector: 'tekus-subscribers-list-subscriptions',
  templateUrl: './list-subscriptions.component.html',
  styles: [],
})
export class ListSubscriptionsComponent {
  /**
    * Manage the state of the side menu
    */
  @ViewChild('side') side!: SideMenuComponent;
  statusList$!: Subscription;

  isOpen: boolean = true

  loading: TypeFetching = 'iddle'
  deletingSub: Subscription
  creatingSub: Subscription

  constructor(private store: Store, private _swal: SwalService) {
    this.deletingSub = this.store.select(selecDeleteSubscribers).subscribe(({ fetching }) => {
      this.loading = fetching
      if (fetching == 'succeded' || fetching == 'rejected') {
        let message = fetching == 'succeded' ? 'Subscriptor eliminado' : 'Ha ocurrido un error'
        this.showAlert(fetching, message)
      }
    })

    this.creatingSub = this.store.select(selectCreateSubscriberFeaure).subscribe(({ fetching }) => {
      this.loading = fetching
      if (fetching == 'succeded' || fetching == 'rejected') {
        let message = fetching == 'succeded' ? 'Subscriptor creado con éxito' : 'Ha ocurrido un error'
        this.showAlert(fetching, message)
        this.side.close();

      }
    })

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // Subscribe to listen if side menu will be open or close
    this.statusList$ = this.store
      .select(selectIsOpenMenuForm)
      .subscribe(({ isOpen }) => {
        this.isOpen = isOpen
        if (isOpen) {
          this.side.open();
        }
        if (isOpen === false) this.side?.close();
      });

  }

  showAlert(fetching: TypeFetching, title: string) {
    this._swal.show({
      title,
      text: '',
      icon: fetching == 'succeded' ? 'success' : 'error',
      showCancel: false
    })
  }


  /**
 * dispatch action to open or close menu
 */
  isChanged(isOpen: boolean): void {
    this.store.dispatch(
      toggleMenuForm({ isOpen })
    );
  }
  ngOnDestroy(): void {
    this.deletingSub.unsubscribe()
    this.creatingSub.unsubscribe()

    this.store.dispatch(createSubscriberUnset())
    this.store.dispatch(deleteSubscriberUnset())

  }


}
