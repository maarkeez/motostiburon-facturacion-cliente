import { Address } from "./address";

export class Client {
    constructor(
        public cif: string,
        public name: string,
        public telephone: string,
        public id?: number,
        public addresses?: Address[],
        public email?: string,
        public fax?: string
    ) { }
 
}