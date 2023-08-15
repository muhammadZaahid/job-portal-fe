import { RouterModule, Routes } from "@angular/router";
import { ProfileDetailComponent } from "./detail/profile-detail.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const routes : Routes = [
    {
        path : '',
        component : ProfileDetailComponent
    }
]

@NgModule({
    declarations : [
        ProfileDetailComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports : [
        RouterModule,
        ProfileDetailComponent
    ]
})
export class ProfileRouting{

}