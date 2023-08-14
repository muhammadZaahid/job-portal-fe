import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { TableModule } from "primeng/table";
import { CandidateListComponent } from "./list/candidate-list.component";

const routes : Routes = [
    {
        path : '',
        component : CandidateListComponent
    }
]

@NgModule({
    declarations : [
        CandidateListComponent
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
        CandidateListComponent
    ]
})
export class CandidateRouting{

}