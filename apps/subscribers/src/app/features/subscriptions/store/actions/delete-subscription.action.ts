import { createAction, props } from '@ngrx/store';
import { Subscriber } from '../../models/subscriber';

/**
 * Action to delete Subscribers
 */
export const deleteSubscriber = createAction(
    '[Delete Subscriber]  delete Subscriber',
    props<{ id: string }>()
);

/**
 * Action when Subscribers is successfully deleted
 */
export const deleteSubscribersSuccess = createAction(
    '[Delete Subscriber] delete  Subscribers Success'
);

/**
 * Action when an error occurs while deleting a Subscriber
 */
export const deleteSubscribersError = createAction(
    '[Delete Subscriber] delete  Subscribers Error',
    props<{ payload: any }>()
);


export const deleteSubscriberUnset = createAction(
    '[Ceate Subscriber] deleteSubscriber Unset'
);

