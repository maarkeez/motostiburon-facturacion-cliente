import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

import { Schedule } from '../../utils/schedule/schedule.model';
import { TableDataSource } from '../../utils/table/table.datasource.model';
import { TableDelegate } from '../../utils/table/table.delegate.model';

import { AdminDeliveryModel } from './admin.delivery.model';

@Component( {
    selector: "admin-delivery",
    moduleId: module.id,
    templateUrl: "./admin.delivery.component.html"

} )
export class AdminDeliveryComponent implements TableDelegate {

    // MARK: - Local Variables
    private _data: AdminDeliveryModel[] = [
        new AdminDeliveryModel( 1, "Leganes", "Madrid", new Date( 2018, 0, 1 ), new Date( 2018, 0, 2 ) ),
        new AdminDeliveryModel( 2, "Getafe", "Madrid", new Date( 2018, 1, 1 ), new Date( 2018, 1, 2 ) ),
        new AdminDeliveryModel( 3, "Pinto", "Madrid", new Date( 2018, 2, 1 ), new Date( 2018, 2, 2 ) ),
        new AdminDeliveryModel( 4, "Parla", "Madrid", new Date( 2018, 3, 1 ), new Date( 2018, 3, 2 ) )
    ];

    private _selectedRow;

    // MARK: - IBActions

    // MARK: - IBOutlets
    public myTable: TableDataSource;

    // MARK: - LIFE VC
    constructor() {
        this.myTable = new TableDataSource( "Deliveries list",
            ["Id", "Dirección recogida", "Fecha Recogida", "Dirección entrega", "Fecha Entrega"],
            ["id", "origen", "fechaOrigen", "destino", "fechaDestino"],
            this._data,
            false,
            [true, true, true, true, true] );
    }

    // MARK: - Utils
   

    // MARK: - Extension (TableDelegate)
    get data() {
        return this._data;
    }
    
    set selectedRow( rowData: any ) {
        this._selectedRow = rowData;
    }

    get selectedRow() {
        return this._selectedRow;
    }

}