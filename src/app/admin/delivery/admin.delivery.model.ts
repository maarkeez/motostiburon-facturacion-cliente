export class AdminDeliveryModel
{
    constructor(
        public id: number,
        public origen: string,
        public destino: string,
        public fechaOrigen: Date,
        public fechaDestino: Date
    ) { }
}