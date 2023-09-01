import { NgModule } from "@angular/core";
import { UserRouting } from "./user.routing";
import { CommonModule } from "@angular/common";

@NgModule({
    imports : [
        UserRouting,
        CommonModule
    ]
})
export class UserModule{

}