import { createFeature, createReducer, on } from '@ngrx/store';

import { TypeFetching } from 'libs/auth/src/lib/core/interfaces/IFetching';
import * as actions from '../actions/delete-subscription';


/**
 * State for delete subscribers
 */
export interface DeleteSubscribersState {
    id: string;
    loaded: boolean;
    fetching: TypeFetching;
    error: any;
}

/**
 * Initial State for delete subscribers
 */
export const subscribersInitialState: DeleteSubscribersState = {
    id: '',
    loaded: false,
    error: null,
    fetching: 'iddle',
};

/**
 * Reducer for get subscribers
 */
export const deleteSubscriberFeature = createFeature({
    name: 'deleteSubscriber',
    reducer: createReducer(
        subscribersInitialState,


        on(actions.deleteSubscriber, (state) => ({
            ...state,
            fetching: 'pending',
        })),

        on(
            actions.deleteSubscribersSuccess,
            (state,): DeleteSubscribersState => ({
                ...state,
                loaded: true,
                fetching: 'succeded',
                id: ''
            })
        ),
        on(actions.deleteSubscribersError, (state, { payload }): DeleteSubscribersState => ({
            ...state,
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
    selectFetching
} = deleteSubscriberFeature;
