import { NgModule } from "@angular/core";
import { ApplicantListComponent } from "./list/applicant-list.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../components/shared-module";
import { ReactiveFormsModule } from "@angular/forms";
import { ApplicantDetailComponent } from "./detail/applicant-detail.component";

const routes : Routes = [
    {
        path : '',
        component : ApplicantListComponent
    },
    {
        path : 'detail/:id',
        component : ApplicantDetailComponent
    }
]

@NgModule({
    declarations : [
        ApplicantListComponent,
        ApplicantDetailComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ],
    exports : [
        RouterModule,
        ApplicantListComponent,
        ApplicantDetailComponent
    ]
})
export class ApplicantRouting{

}