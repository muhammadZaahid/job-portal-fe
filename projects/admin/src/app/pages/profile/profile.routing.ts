import { RouterModule, Routes } from "@angular/router";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../components/shared-module";

const routes : Routes = [
    {
        path : 'change-password',
        component : ChangePasswordComponent
    }
]

@NgModule({
    declarations : [
        ChangePasswordComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        SharedModule
    ],
    exports : [
        RouterModule,
        ChangePasswordComponent
    ]
})
export class ProfileRouting{

}