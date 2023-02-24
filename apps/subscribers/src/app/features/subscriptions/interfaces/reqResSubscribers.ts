export interface ReqResSubscribers {
    Count: number;
    Data:  DataReqResSubscribers[];
}

export interface DataReqResSubscribers {
    SystemId:                     null;
    Area:                         string;
    PublicId:                     number;
    CountryCode:                  string;
    CountryName:                  string;
    Name:                         string;
    EndpointsCount:               number;
    Email:                        string;
    JobTitle:                     string;
    PhoneNumber:                  string;
    PhoneCode:                    string;
    PhoneCodeAndNumber:           string;
    LastActivityUtc:              null;
    LastActivity:                 null;
    LastActivityString:           null;
    SubscriptionDate:             null;
    SubscriptionMethod:           number;
    SubscriptionState:            number;
    SubscriptionStateDescription: string;
    Topics:                       any[];
    ValidEmail:                   boolean;
    ConnectionState:              number;
    Id:                           string;
    Activity?:                     string;

}




export interface ReqResCountry {
    Count: number;
    Data:  Country[];
}

export interface Country {
    Code:      string;
    Code3:     string;
    Name:      string;
    PhoneCode: string;
}
