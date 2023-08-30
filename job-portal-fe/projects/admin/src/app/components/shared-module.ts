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
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenuModule } from 'primeng/menu';
import { TagModule } from 'primeng/tag';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputSwitchModule } from 'primeng/inputswitch';

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
        DialogModule,
        ConfirmDialogModule,
        MenuModule,
        TagModule,
        KeyFilterModule,
        InputSwitchModule
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
        DialogModule,
        ConfirmDialogModule,
        MenuModule,
        TagModule,
        KeyFilterModule,
        InputSwitchModule
    ]
})
export class SharedModule{

}