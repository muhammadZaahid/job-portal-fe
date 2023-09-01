import { NgModule } from "@angular/core";
import { UserListComponent } from "./list/user-list.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../components/shared-module";
import { UserCreateComponent } from "./create/user.create.component";
import { ReactiveFormsModule } from "@angular/forms";

const routes : Routes = [
    {
        path : '',
        component : UserListComponent
    },
    {
        path : 'add',
        component : UserCreateComponent
    }
]

@NgModule({
    declarations : [
        UserListComponent,
        UserCreateComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ],
    exports : [
        RouterModule,
        UserListComponent,
        UserCreateComponent
    ]
})
export class UserRouting{

}