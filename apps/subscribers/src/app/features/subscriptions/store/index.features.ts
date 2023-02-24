import { StoreModule } from '@ngrx/store';
import * as subscriberFeature from './reducers/subscribers.feature';
import * as deleteSubscriberFeature from './reducers/delete-subscribers.feature';


export const featuresReducers = [
  StoreModule.forFeature(subscriberFeature.subscribersFeature),
  StoreModule.forFeature(deleteSubscriberFeature.deleteSubscriberFeature),
];
