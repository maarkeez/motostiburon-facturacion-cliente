import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Client } from "./entities/client";

@Injectable()
export class ClientService {

    url = "http://localhost:8080/client";

    constructor( private http: Http ) { }

    getClients(): Observable<Client[]> {
      
        
        return this.http.get( this.url )
            .map( this.extracGettData )
            .catch( this.handleErrorObservable );
    }

    addClient( client: Client ): Observable<Client> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');        
        
        let options = new RequestOptions( { headers: headers } );
        return this.http.post( this.url, client, options )
            .map( this.extractPostData )
            .catch( this.handleErrorObservable );
    }

    private extracGettData( res: Response ) {
        let body = res.json();
        return body._embedded.client  || {};
    }

    private extractPostData( res: Response ) {
        let body = res.json();
        return body  || {};
    }
    
    private handleErrorObservable( error: Response | any ) {
        console.error( error.message || error );
        return Observable.throw( error.message || error );
    }
}