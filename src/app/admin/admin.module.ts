import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";


import { AdminComponent } from "./admin.component";
import { AdminDeliveryComponent } from "./delivery/admin.delivery.component";
import { ClientComponent } from './client/client.component';
import { CardComponent } from "../utils/card/card.component";
import { CardContentComponent } from "../utils/card/card.content.component";
import { DelimiterComponent } from "../utils/delimiter/delimiter.component";
import { ScheduleComponent } from "../utils/schedule/schedule.component";
import { TableComponent } from "../utils/table/table.component";
import { TableFilter} from '../utils/table/table.filter';


import { AmazingTimePickerModule } from 'amazing-time-picker';

//Services
import { DateHelper }  from '../utils/helpers/date-helper';
import { ClientService } from "../persistence/client.service";
import { PageFilter } from "../utils/filters/page.filter";


@NgModule({
    imports: [CommonModule, HttpModule, FormsModule, AmazingTimePickerModule],
    exports: [AdminComponent, AdminDeliveryComponent,ClientComponent],
    declarations: [TableFilter,PageFilter, AdminComponent, AdminDeliveryComponent,ClientComponent,DelimiterComponent, CardComponent,CardContentComponent, ScheduleComponent, TableComponent],
    providers: [DateHelper,ClientService]
})
export class AdminModule { }