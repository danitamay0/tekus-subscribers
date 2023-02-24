

export class Subscriber {
    constructor(
        public id:string,
        public name: string,
        public email: string,
        public countryCode: string,
        public phoneNumber: string,
        public jobTitle: string,
        public area: string,
        public topics: string[],
        public status:string
    ) { }
}


