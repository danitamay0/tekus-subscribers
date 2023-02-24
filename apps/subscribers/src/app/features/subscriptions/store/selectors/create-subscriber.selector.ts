import { createSelector } from '@ngrx/store';
import { selectFetching, selectErrorMessage } from '../reducers/create-subscriber.feature';

export const selectCreateSubscriberFeaure = createSelector(
    selectFetching, selectErrorMessage,
    (fetching, errorMessage) => ({ fetching, errorMessage })
);
