import { createAction, props } from '@ngrx/store';
import { ICreateSubscriber } from '../../interfaces/createSubscriber';

export const createSubscriber = createAction(
    '[Ceate Subscriber] LoadPerson',
    props<{ data: ICreateSubscriber }>()
);

export const createSubscriberSuccess = createAction(
    '[Ceate Subscriber] createSubscriber Success'
);

export const createSubscriberError = createAction(
    '[Ceate Subscriber] createSubscriber Error',
    props<{ payload: any }>()
);

export const createSubscriberUnset = createAction(
    '[Ceate Subscriber] createSubscriber Unset'
);
