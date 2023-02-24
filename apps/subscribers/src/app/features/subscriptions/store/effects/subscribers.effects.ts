import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { SubscriberService } from '../../services/subscribers.service';
import * as subscriberAction from '../actions/subscriptions.actions';
import * as deleteSubscriberAction from '../actions/delete-subscription';
import { subscribersInitialState } from '../reducers/subscribers.feature';

@Injectable()
export class SubscribersEfects {

    constructor(
        private _subscriber: SubscriberService,
        private actions$: Actions
    ) { }

    /**
     * Effect to get subscribers list
     */
    loadSubscribers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(subscriberAction.addSubscribers),
            mergeMap(({ params }) =>
                /**
                * service to get subscribers
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
     * Effect to remove subscriber
     */
    removeSubscribers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteSubscriberAction.deleteSubscriber),
            mergeMap(({ id }) =>
                /**
                * service to delete subscribers
                */
                this._subscriber.deleteSubscriber(id).pipe(
                    switchMap((response) => {
                        const params = {
                            pagination: {
                                page: 1,
                                count: subscribersInitialState.pagination.pageSize,
                                sortOrder: 'PublicId',
                                sortType: 1
                            },
                            filters: { criteria: '' }
                        }
                        return [
                            subscriberAction.unsetPaginationSubscribers(),
                            subscriberAction.unsetFiltersSubscribers(),
                            subscriberAction.addSubscribers({
                                params
                            }),
                            deleteSubscriberAction.deleteSubscribersSuccess()


                        ];
                    }),
                    catchError((err) =>
                        of(deleteSubscriberAction.deleteSubscribersError({ payload: err }))
                    )
                )
            )
        )
    );
    /**
                   * service to get subscribers list, close Modal and insert new client in to reducer
                   */
    /**
     * Effect to create subscribers list
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
