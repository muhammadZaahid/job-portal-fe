import { RouterModule, Routes } from "@angular/router";
import { ProfileDetailComponent } from "./detail/profile-detail.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { CardModule } from "primeng/card";
import { MenuModule } from 'primeng/menu';

const routes : Routes = [
    {
        path : '',
        component : ProfileDetailComponent
    }
]

@NgModule({
    declarations : [
        ProfileDetailComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        CommonModule,
        PanelModule,
        ButtonModule,
        DividerModule,
        CardModule,
        MenuModule

    ],
    exports : [
        RouterModule,
        ProfileDetailComponent
    ]
})
export class ProfileRouting{

}