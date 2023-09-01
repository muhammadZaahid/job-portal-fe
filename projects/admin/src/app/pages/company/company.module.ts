import { NgModule } from "@angular/core";
import { CompanyRouting } from "./company.routing";
import { CommonModule } from "@angular/common";

@NgModule({
    imports : [
        CompanyRouting,
        CommonModule
    ]
})
export class CompanyModule{

}