import { createAction, props } from '@ngrx/store';
import { Subscriber } from '../../models/subscriber';

/**
 * Action to get Subscribers
 */
export const addSubscribers = createAction(
    '[Subscriber] Add add Subscribers',
    props<{ params?: any }>()
);

/**
 * Action when Subscribers is successfully added
 */
export const addSubscribersSuccess = createAction(
    '[Subscriber] Add add Subscribers Success',
    props<{ subscribers: Subscriber[]; pagination: any, filters: any }>()
);

/**
 * Action when an error occurs while getting Subscribers
 */
export const addSubscribersError = createAction(
    '[Subscriber] Add add Subscribers Error',
    props<{ payload: any }>()
);

/**
 * Action to unset filters of Subscribers
 */
export const unsetFiltersSubscribers = createAction(
    '[Subscriber] Unset Filters add Subscribers',
);

/**
 * Action to unset pagination of Subscribers
 */
export const unsetPaginationSubscribers = createAction(
    '[Subscriber] Unset Pagination add Subscribers',
);


