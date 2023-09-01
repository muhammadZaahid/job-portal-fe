import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CandidateRouting } from "./candidate.routing";

@NgModule({
    imports : [
        CandidateRouting,
        CommonModule
    ]
})
export class CandidateModule{

}