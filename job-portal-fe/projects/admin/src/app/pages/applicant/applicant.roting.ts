import { NgModule } from "@angular/core";
import { ApplicantListComponent } from "./list/applicant-list.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../components/shared-module";
import { ReactiveFormsModule } from "@angular/forms";

const routes : Routes = [
    {
        path : '',
        component : ApplicantListComponent
    }
]

@NgModule({
    declarations : [
        ApplicantListComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ],
    exports : [
        RouterModule,
        ApplicantListComponent
    ]
})
export class ApplicantRouting{

}