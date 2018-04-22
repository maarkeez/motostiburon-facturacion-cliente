import { Component  } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

import { Card } from '../utils/card/card.model';

@Component({
    selector: "admin",
    moduleId: module.id,
    templateUrl: "./admin.component.html"
})
export class AdminComponent {

    
    card_delivery = new Card( ["far fa-user","far fa-envelope"],"/admin/delivery","Delivery","Check Delivery list.");

    // MARK: - Local Variables
    private _data = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    private _header = ["First", "Second", "Third"];
    private _showAllColumns = true;
    private _selectedRow=[];
    public showColum = [true,true,true];

    // MARK: - IBActions
    set showAllColumns(isShown : boolean) {
        this._showAllColumns = isShown;
    }

    set selectedRow(object: any) {
        this._selectedRow = object;
    }

    // MARK: - LIFE VC
    get data() {
        return this._data;
    }

    get header(): string[] {
        return this._header;
    }

    get showAllColumns() : boolean {
        return this._showAllColumns;
    }

    get selectedRow() {
        return this._selectedRow;
    }



// MARK: - Utils

}