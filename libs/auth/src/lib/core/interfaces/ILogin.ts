
export interface ILogin{
    UserName:string,
    Password:string
}

export interface ReqResLogin {
    Status:                number;
    Token:                 string;
    Message:               null;
    TwoFactorType:         null;
    AllowedTwoFactorTypes: null;
    Permissions:           Permission[];
    Features:              Feature[];
    Locations:             any[];
    LastLocationId:        number;
    Preferences:           any[];
    UserType:              string;
    Email:                 string;
    FirstName:             string;
    LastName:              string;
    CompanyName:           string;
    TimeZoneInfo:          null;
    RefreshToken:          string;
}

export interface Feature {
    M: string;
    F: string;
}

export interface Permission {
    M: string;
    D: string;
}
