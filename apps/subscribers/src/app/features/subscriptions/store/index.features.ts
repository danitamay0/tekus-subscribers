import { StoreModule } from '@ngrx/store';
import * as subscriberFeature from './reducers/subscribers.feature';


export const featuresReducers = [
  StoreModule.forFeature(subscriberFeature.subscribersFeature),
];
