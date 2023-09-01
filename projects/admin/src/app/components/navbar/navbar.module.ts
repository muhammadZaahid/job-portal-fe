import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar.component";
import {MenubarModule} from 'primeng/menubar';

@NgModule({
    declarations : [
        NavbarComponent
    ],
    imports : [
        RouterModule,
        CommonModule,
        MenubarModule
    ],
    exports : [
        NavbarComponent
    ]
})
export class NavbarModule{

}