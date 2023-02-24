import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SubscribersApiService } from '../api/subscribers.api';
import { DataReqResSubscribers, ReqResSubscribers } from '../interfaces/reqResSubscribers';
import { Subscriber } from '../models/subscriber';


@Injectable({
  providedIn: 'root',
})
export class SubscriberService {
  constructor(private _subscribers: SubscribersApiService) { }

  loadSubscribers(params: any = {}) {
    return this._subscribers.loadSubscribers({ ...params.pagination, ...params.filters })
      .pipe(
        map((response) => ({
          data: this.makeDataCustom(response.Data),
          pagination: this.makePaginationCustom(response.Count),
        }))
      );
  }

  private makePaginationCustom(total: number) {
    return {
      length: total
    };
  }

  private makeDataCustom(data: DataReqResSubscribers[]): Subscriber[] {
    return data.map((subscriber) => this.dataSubscriber(subscriber));
  }

  private dataSubscriber(subcriber: DataReqResSubscribers) {
    return new Subscriber(
      subcriber.Id,
      subcriber.Name,
      subcriber.Email,
      subcriber.CountryCode,
      subcriber.PhoneNumber,
      subcriber.JobTitle,
      subcriber.Area,
      subcriber.Topics,
      subcriber.SubscriptionStateDescription
    );
  }


}
