import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register.component";
import { SharedModule } from "../../components/shared-module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

const routes : Routes = [
    {
        path : '',
        component : RegisterComponent
    }
]

@NgModule({
    declarations : [
        RegisterComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports : [
        RegisterComponent,
        RouterModule
    ]
})
export class RegisterRouting{

}