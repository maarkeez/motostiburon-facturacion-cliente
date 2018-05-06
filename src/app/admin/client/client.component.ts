import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

import { TableDataSource } from '../../utils/table/table.datasource.model';
import { TableDelegate } from '../../utils/table/table.delegate.model';

import { Client } from '../../persistence/entities/client';
import { Address } from '../../persistence/entities/address';

//Services
import { ClientService } from "../../persistence/client.service";




@Component( {
    selector: "client-component",
    moduleId: module.id,
    templateUrl: "./client.component.html"

} )
export class ClientComponent implements TableDelegate {


    // MARK: - Local Variables
    private _selectedClient: Client;
    private _data: Client[] = [];
    errorMessage: String;


    // MARK: - IBOutlets
    public myTable: TableDataSource;


    // MARK: - IBActions
    public addClientAction() {
        console.log( "Añadiendo cliente a la lista" );
        console.log( this._selectedClient );


        this.clientService.addClient( this._selectedClient ).subscribe(
            client => this._data.push( client ),
            error => this.errorMessage = <any>error
        );


        this.cleanForm();

        console.log( "Lista clientes:" );
        console.log( this.myTable.data );
    }

    
    // MARK: - LIFE VC
    constructor( private clientService: ClientService ) {
        this.myTable = new TableDataSource( "Listado clientes",
            ["Cif", "Nombre", "Email", "Telefono", "Fax"],
            ["cif", "name", "email", "telephone", "fax"],
            this._data,
            false,
            [true, true, true, true] );
        this.cleanForm();
        this.findAllClients();
    }

    
    // MARK: - Utils
    private cleanForm() {
        this._selectedClient = new Client( "", "", "", null, [], "", "" );
    }

    private updateClients( clients: Client[] ) {
        //Empty the array.
        this._data.length = 0;

        //Insert all clients
        for ( let i = 0; i < clients.length; i++ ) {
            this._data.push( clients[i] );
        }
    }


    // MARK: - Extension (TableDelegate)
    set selectedRow( rowData: any ) {
        let client = rowData as Client;
        this._selectedClient = client;
    }

    get selectedRow() {
        return this._selectedClient;
    }


    // MARK: - Extension server connection
    findAllClients(): void {
        this.clientService.getClients().subscribe(
            clients => this.updateClients( clients ),
            error => this.errorMessage = <any>error,
        );
    }
















}