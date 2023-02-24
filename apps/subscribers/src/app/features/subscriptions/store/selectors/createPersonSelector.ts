import { createSelector } from '@ngrx/store';
import { selectPerson, selectFetching, selectErrorMessage } from '../reducers/createUser.feature';

export const selectCreatePersonFeaure = createSelector(
    selectPerson, selectFetching, selectErrorMessage,
    (person, fetching, errorMessage) => ({ person, fetching, errorMessage })
);
