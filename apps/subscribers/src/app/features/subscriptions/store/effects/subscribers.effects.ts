import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, mergeMap, of, switchMap } from 'rxjs';
import { SubscriberService } from '../../services/subscribers.service';
import * as subscriberAction from '../actions/subscriptions.actions';
import * as deleteSubscriberAction from '../actions/delete-subscription.action';
import * as createSubscriberAction from '../actions/create-subscription.actions';
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
                    switchMap((response) => [
                        ...this.defaultActions,
                        deleteSubscriberAction.deleteSubscribersSuccess()
                    ]
                    ),
                    catchError((err) =>
                        of(deleteSubscriberAction.deleteSubscribersError({ payload: err }))
                    )
                )
            )
        )
    );

    createSubscribers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createSubscriberAction.createSubscriber),
            mergeMap(({ data }) =>
                /**
                * service to create subscribers
                */
                this._subscriber.createSubscriber(data).pipe(
                    switchMap((response) => [
                        createSubscriberAction.createSubscriberSuccess(),
                        ...this.defaultActions,
                    ]
                    ),
                    catchError((err) =>
                        of(createSubscriberAction.createSubscriberError({ payload: err }))
                    )
                )
            )
        )
    );

    defaultActions = [
        subscriberAction.unsetPaginationSubscribers(),
        subscriberAction.unsetFiltersSubscribers(),
        subscriberAction.addSubscribers({
            params: {
                pagination: {
                    page: 1,
                    count: subscribersInitialState.pagination.pageSize,
                    sortOrder: 'PublicId',
                    sortType: 1
                },
                filters: { criteria: '' }
            }
        }),]
}
