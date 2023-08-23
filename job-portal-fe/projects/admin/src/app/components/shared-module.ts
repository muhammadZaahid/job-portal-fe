import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextModule } from "primeng/inputtext";
import { TableModule } from "primeng/table";
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';

@NgModule({
    imports : [
        TableModule,
        CardModule,
        ButtonModule,
        DividerModule,
        InputTextModule,
        FileUploadModule,
        CalendarModule,
        DropdownModule,
        InputTextareaModule,
        DialogModule      
    ],
    exports : [
        TableModule,
        CardModule,
        ButtonModule,
        DividerModule,
        InputTextModule,
        FileUploadModule,
        ToggleButtonModule,
        CalendarModule,
        DropdownModule,
        InputTextareaModule,
        DialogModule
    ]
})
export class SharedModule{

}