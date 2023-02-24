import { createSelector } from '@ngrx/store';
import {
    selectLoaded,
    selectError,
    selectSubscribers,
    selectPagination,
    selectFetching,
    selectFilters,
} from '../reducers/subscribers.feature';

export const selecSubscribers = createSelector(
    selectLoaded,
    selectPagination,
    selectError,
    selectSubscribers,

    (loaded, pagination, error, subscribers) => ({
        loaded,
        error,
        subscribers,
        pagination,
    })
);

export const selecFiltersSubscribers = createSelector(
    selectFilters,
    (filters) => ({
        filters,
    })
);

export const fetchingSubscribers = createSelector(
    selectLoaded,
    selectError,
    selectFetching,

    (loaded, error, fetching) => ({
        loaded,
        error,
        fetching,
    })
);

