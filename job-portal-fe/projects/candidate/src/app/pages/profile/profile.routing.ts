import { RouterModule, Routes } from "@angular/router";
import { ProfileDetailComponent } from "./detail/profile-detail.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { CardModule } from "primeng/card";
import { MenuModule } from 'primeng/menu';
import { ProfileUpdateComponent } from "./update/profile-update.component";
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FileUploadModule } from 'primeng/fileupload';


const routes : Routes = [
    {
        path : '',
        component : ProfileDetailComponent
    },
    {
        path : 'edit',
        component : ProfileUpdateComponent
    }
]

@NgModule({
    declarations : [
        ProfileDetailComponent,
        ProfileUpdateComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        CommonModule,
        PanelModule,
        ButtonModule,
        DividerModule,
        CardModule,
        MenuModule,
        InputTextModule,
        CalendarModule,
        KeyFilterModule,
        FileUploadModule

    ],
    exports : [
        RouterModule,
        ProfileDetailComponent,
        ProfileUpdateComponent
    ]
})
export class ProfileRouting{

}