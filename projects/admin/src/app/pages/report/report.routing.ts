import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReportApplicantComponent } from "./applicant/report-applicant.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../components/shared-module";

const routes : Routes = [
    {
        path : 'applicant',
        component : ReportApplicantComponent
    }
]

@NgModule({
    declarations : [
        ReportApplicantComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ],
    exports : [
        RouterModule,
    ]
})
export class ReportRouting{

}