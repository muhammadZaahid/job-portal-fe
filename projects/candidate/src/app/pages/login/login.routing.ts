import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { RouterModule, Routes } from "@angular/router";

const routes : Routes = [
    {
        path : '',
        component : LoginComponent
    }
]

@NgModule({
    declarations : [
        LoginComponent
    ],
    imports : [
        RouterModule.forChild(routes)

    ],
    exports : [
        RouterModule,
        LoginComponent
    ]
})
export class LoginRouting{

}