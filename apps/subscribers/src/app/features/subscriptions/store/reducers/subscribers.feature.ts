import { createFeature, createReducer, on } from '@ngrx/store';

import { IPagination } from 'apps/subscribers/src/app/core/interfaces/IFetching';
import { TypeFetching } from 'libs/auth/src/lib/core/interfaces/IFetching';
import { Subscriber } from '../../models/subscriber';
import * as actions from '../actions/subscriptions.actions';

interface Filters {
    criteria: string;

}

/**
 * State for get subscribers
 */
export interface SubscribersState {
    subscribers: Subscriber[];
    pagination: IPagination;
    loaded: boolean;
    fetching: TypeFetching;
    error: any;
    filters: Filters;
}

/**
 * Initial State for  get subscribers
 */
export const subscribersInitialState: SubscribersState = {
    subscribers: [],
    loaded: false,
    error: null,
    fetching: 'iddle',
    pagination: {
        page: 1,
        length: 0,
        pageSize: 10,
        totalPages: 0
    },
    filters: {
        criteria: '',
    },
};

/**
 * Reducer for get subscribers
 */
export const subscribersFeature = createFeature({
    name: 'subscribers',
    reducer: createReducer(
        subscribersInitialState,

        on(actions.unsetFiltersSubscribers, (state) => ({
            ...state,
            filters: subscribersInitialState.filters,
        })),

        on(actions.unsetPaginationSubscribers, (state) => ({
            ...state,
            pagination: subscribersInitialState.pagination,
        })),

        on(actions.addSubscribers, (state) => ({
            ...state,
            fetching: 'pending',
        })),

        on(
            actions.addSubscribersSuccess,
            (state, { subscribers, pagination, filters }): SubscribersState => ({
                ...state,

                loaded: true,
                fetching: 'succeded',
                filters: { ...state.filters, ...filters },
                pagination: {
                    ...state.pagination,
                    ...pagination,
                
                    totalPages: Math.ceil(pagination.length / state.pagination.pageSize),
                },
                subscribers: [...subscribers],
            })
        ),
        on(actions.addSubscribersError, (state, { payload }): SubscribersState => ({
            ...state,
            subscribers: [],
            fetching: 'rejected',
            loaded: true,
            error: {
                url: payload.url,
                name: payload.name,
                message: payload.message,
            },
        }))
    ),
});

export const {
    selectLoaded,
    selectError,
    selectSubscribers,
    selectPagination,
    selectFetching,
    selectFilters
} = subscribersFeature;
