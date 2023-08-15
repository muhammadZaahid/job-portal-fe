import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
    selector: 'application-list',
    templateUrl: './application-list.component.html'
})
export class ApplicationListComponent implements OnInit {

    items: MenuItem[] | undefined;

    ngOnInit(): void {
        this.items = [
            {
                label: 'Applied'                
            },
            {
                label: 'Interview'
            }

        ];
    }
}