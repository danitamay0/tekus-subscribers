import { StoreModule } from '@ngrx/store';
import * as subscriberFeature from './reducers/subscribers.feature';
import * as deleteSubscriberFeature from './reducers/delete-subscribers.feature';
import * as menuFormFeature from './reducers/menu-form-reducer';
import * as createSubscriberFeature from './reducers/create-subscriber.feature';


export const featuresReducers = [
  StoreModule.forFeature(subscriberFeature.subscribersFeature),
  StoreModule.forFeature(deleteSubscriberFeature.deleteSubscriberFeature),
  StoreModule.forFeature(menuFormFeature.sideFomFeature),
  StoreModule.forFeature(createSubscriberFeature.createSubscriberFeature),
];
