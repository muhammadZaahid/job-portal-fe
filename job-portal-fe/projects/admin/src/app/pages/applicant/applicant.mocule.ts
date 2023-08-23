import { NgModule } from "@angular/core";
import { ApplicantRouting } from "./applicant.roting";
import { CommonModule } from "@angular/common";

@NgModule({
    imports : [
        ApplicantRouting,
        CommonModule
    ]
})
export class ApplicantModule{

}