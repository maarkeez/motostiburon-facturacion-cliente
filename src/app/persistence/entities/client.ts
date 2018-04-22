import { Address } from "./address";

export class Client {
    constructor(
        public id: string,
        public name: string,
        public telephone: string,
        public deliveryAddressList?: Address[],
        public invoiceAddress?: Address,
        public email?: string,
        public fax?: string
    ) { }
 
}