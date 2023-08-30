import { RouterModule, Routes } from "@angular/router";
import { ApplicationListComponent } from "./list/application-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabMenuModule } from "primeng/tabmenu";
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { SharedModule } from "../../components/shared-module";

const routes : Routes = [
    {
        path : '',
        component : ApplicationListComponent
    }
]

@NgModule({
    declarations : [
        ApplicationListComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        CommonModule,
        TabMenuModule,
        AvatarModule,
        BadgeModule,
        DividerModule,
        SharedModule
    ],
    exports : [
        RouterModule,
        ApplicationListComponent
    ]
})
export class ApplicationRouting{

}