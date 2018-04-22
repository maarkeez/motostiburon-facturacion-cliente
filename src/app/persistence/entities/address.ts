export class Address
{
    constructor(
        public id: number,
        public address: string,
        public ZIP: string,
        public city: string,
        public province: string,
        public country: string
    ) { }
}