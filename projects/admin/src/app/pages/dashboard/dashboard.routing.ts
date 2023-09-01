import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardModule } from "primeng/card";
import { SharedModule } from "../../components/shared-module";


const routes : Routes = [
    {
        path : '',
        component : DashboardComponent
    }
]

@NgModule({
    declarations : [
        DashboardComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        CommonModule

    ],
    exports : [
        RouterModule,
        DashboardComponent
    ]
})
export class DashboardRouting{

}