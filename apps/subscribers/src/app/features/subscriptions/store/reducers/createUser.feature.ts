import { createFeature, createReducer, on } from '@ngrx/store';
import { TypeFetching } from 'apps/users/src/app/core/interfaces/IFetching';
import { IPersonCreate } from '../../interfaces/IPerson';

import * as actions from '../actions/create-person.actions';

interface State {
  person: IPersonCreate;
  fetching: TypeFetching;
  errorMessage: string;
}

const initialState: State = {
  person: {  email: '', first_name: '', identifier: '', last_name: '', type_identifier: '' },
  fetching: 'iddle',
  errorMessage: ''
};

export const createPersonFeature = createFeature({
  name: 'createPersonFeature',
  reducer: createReducer(
    initialState,
    on(actions.loadCreatePerson, (state) => ({
      ...state,
      fetching: 'pending',
      errorMessage: ''
    })),
    on(actions.loadCreatePersonSuccess, (state) => ({
      ...state,
      fetching: 'succeded',
    })),
    on(actions.loadCreatePersonError, (state, { payload }) => {
      return ({
        ...state,
        person: initialState.person,
        fetching: 'rejected',
        errorMessage: payload?.error?.detail
      })
    })
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectPerson, // selector for `person` property
  selectFetching, // selector for `loading` property
  selectErrorMessage,
} = createPersonFeature;