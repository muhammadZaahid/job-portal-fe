import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { TableModule } from "primeng/table";
import { CandidateListComponent } from "./list/candidate-list.component";
import { SharedModule } from "../../components/shared-module";
import { ReactiveFormsModule } from "@angular/forms";

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
        SharedModule,
        ReactiveFormsModule
    ],
    exports : [
        RouterModule,
        CandidateListComponent
    ]
})
export class CandidateRouting{

}