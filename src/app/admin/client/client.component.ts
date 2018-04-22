import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

import { TableDataSource } from '../../utils/table/table.datasource.model';
import { TableDelegate } from '../../utils/table/table.delegate.model';

import { Client } from '../../persistence/entities/client';
import { Address } from '../../persistence/entities/address';


@Component( {
    selector: "client-component",
    moduleId: module.id,
    templateUrl: "./client.component.html"

} )
export class ClientComponent implements TableDelegate {

    // MARK: - Local Variables
    private _selectedClient: Client;
    private _data: Client[] = []

    // MARK: - IBOutlets
    public myTable: TableDataSource;

    // MARK: - IBActions
    public addClientAction() {
        console.log( "Añadiendo cliente a la lista" );
        console.log( this._selectedClient );
        
        
        this._data.push( this._selectedClient );
        this.cleanForm();

        console.log( "Lista clientes:" );
        console.log( this.myTable.data );
    }

    // MARK: - LIFE VC
    constructor() {
        this.myTable = new TableDataSource( "Listado clientes",
            ["Cif", "Nombre", "Email", "Telefono", "Fax"],
            ["id","name","email","telephone","fax"],
            this._data,
            false,
            [true, true, true, true] );
        this.cleanForm();
    }

    // MARK: - Utils
    private cleanForm() {
        this._selectedClient = new Client( "", "", "", [], null, "", "" );
    }


    // MARK: - Extension (TableDelegate)
    set selectedRow( rowData: any ) {
        let client = rowData as Client;
        
        this._selectedClient = Object.assign({}, client);
    }

    get selectedRow() {
        return this._selectedClient;
    }



}