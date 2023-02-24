import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { SubscriberService } from '../../services/subscribers.service';
import * as subscriberAction from '../actions/subscriptions.actions';
/* import * as insertsubscriberAction from '../actions/insert-client-list.actions';
import * as sideFormActions from '../actions/side-form-actions';
 */
@Injectable()
export class SubscribersEfects {

    constructor(
        private _subscriber: SubscriberService,
        private actions$: Actions
    ) { }

    /**
     * Effect to get clients list
     */
    loadSubscribers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(subscriberAction.addSubscribers),
            mergeMap(({ params }) =>
                /**
                * service to get clients list and close Modal
                */
                this._subscriber.loadSubscribers(params).pipe(
                    switchMap((response) => {
                        return [
                            subscriberAction.addSubscribersSuccess({
                                subscribers: [...response.data],
                                pagination: {
                                    length: response.pagination.length,
                                    page: params.pagination.page,
                                },
                                filters: params?.filters,
                            }),
                            /*   sideFormActions.toggleSideForm({
                                isOpen: false,
                                typeForm: 'create',
                              }), */
                        ];
                    }),
                    catchError((err) =>
                        of(subscriberAction.addSubscribersError({ payload: err }))
                    )
                )
            )
        )
    );
 /**
                * service to get clients list, close Modal and insert new client in to reducer
                */
    /**
     * Effect to create clients list
     */
    /* insertSubscribers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(insertsubscriberAction.insertSubscribers),
            mergeMap((data) =>
               
                this._subscriber.saveClientList(data).pipe(
                    switchMap((response) => {
                        return [
                            insertsubscriberAction.insertClientListsSuccess({
                                clientList: response,
                            }),
                            sideFormActions.toggleSideForm({
                                isOpen: false,
                                typeForm: 'create',
                            }),
                            subscriberAction.addClientLists({
                                params: { pagination: { page: 1 } },
                            }),
                        ];
                    }),
                    catchError((err) =>
                        of(
                            insertsubscriberAction.insertClientListsError({ payload: err }),
                            sideFormActions.toggleSideForm({
                                isOpen: false,
                                typeForm: 'create',
                            })
                        )
                    )
                )
            )
        )
    ); */
}
