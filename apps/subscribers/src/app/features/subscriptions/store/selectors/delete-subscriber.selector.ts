import { createSelector } from '@ngrx/store';
import {
    selectFetching,
    selectError,
} from '../reducers/delete-subscribers.feature';

export const selecDeleteSubscribers = createSelector(
    selectFetching,
    selectError,
    (fetching, error) => ({
        fetching,
        error,
    })
);
