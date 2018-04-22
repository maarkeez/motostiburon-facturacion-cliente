import { Component, Input  } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { TableDataSource } from './table.datasource.model';
import { TableDelegate } from './table.delegate.model';
import { DateHelper } from '../helpers/date-helper';

@Component({
    selector: "table-custom",
    moduleId: module.id,
    templateUrl: "./table.component.html",
    styleUrls: ['table.component.css']

})
export class TableComponent {

    @Input()
    table: TableDataSource;

    @Input()
    delegate: TableDelegate;


    filters: string[] = [];


    // MARK: - Local Variables

    // MARK: - Actions

    // MARK: - Outlets

    // MARK: - LIFE Component
    constructor(private dateHelper: DateHelper) { }

    // MARK: - Utils
//    isDate(obj: any): boolean {
//        if (obj === null || obj === undefined) {
//            return false;
//        }
//        
//        return obj instanceof Date;
//    }

}