import { createFeature, createReducer, on } from '@ngrx/store';
import { TypeFetching } from 'libs/auth/src/lib/core/interfaces/IFetching';
import { ICreateSubscriber } from '../../interfaces/createSubscriber';

import * as actions from '../actions/create-subscription.actions';

interface State {
  fetching: TypeFetching;
  errorMessage: string;
}

const initialState: State = {
  fetching: 'iddle',
  errorMessage: ''
};

export const createSubscriberFeature = createFeature({
  name: 'createSubscriberFeature',
  reducer: createReducer(
    initialState,
    on(actions.createSubscriber, (state) => ({
      ...state,
      fetching: 'pending',
      errorMessage: ''
    })),
    on(actions.createSubscriberSuccess, (state) => ({
      ...state,
      fetching: 'succeded',
      /* State:initialState.ini */

    })),
    on(actions.createSubscriberError, (state, { payload }) => {
      return ({
        ...state,
        fetching: 'rejected',
        errorMessage: payload?.error?.detail
      })
    }),
    on(actions.createSubscriberUnset, (state,) => ({
      ...initialState
    }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectFetching, // selector for `loading` property
  selectErrorMessage,
} = createSubscriberFeature;