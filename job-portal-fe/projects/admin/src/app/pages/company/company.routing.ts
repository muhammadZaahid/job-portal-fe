import { RouterModule, Routes } from "@angular/router";
import { CompanyListComponent } from "./list/company-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";


const routes : Routes = [
    {
        path : '',
        component : CompanyListComponent
    }
]

@NgModule({
    declarations : [
        CompanyListComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        CommonModule,
        TableModule,
        CardModule,
        ButtonModule
    ],
    exports : [
        RouterModule,
        CompanyListComponent
    ]
})
export class CompanyRouting{

}