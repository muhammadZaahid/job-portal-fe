import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BaseComponent } from "./base.component";
import { NavbarModule } from "../navbar/navbar.module";

@NgModule({
    declarations : [
        BaseComponent
    ],
    imports : [
        NavbarModule,
        RouterModule
    ],
    exports : [
        BaseComponent,
        NavbarModule
    ]
})
export class BaseModule{
    
}