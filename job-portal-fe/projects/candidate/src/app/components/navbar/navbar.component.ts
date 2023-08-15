import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api/menuitem";
// import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{

    items : MenuItem[] | undefined
    constructor(
        // private authService : AuthService,
        private router : Router
    ){}

    ngOnInit(): void {
        this.items = [          
            {
                label : 'Search Job',
                icon : 'pi pi-search',
                routerLink : '/candidate/jobvacancy'
            },
            {
                label : 'Profile',
                routerLink : '/candidate/profile'
            },
            {
                label : 'Application'
            },
            {
                icon : 'pi pi-user',
                items: [
                    {
                        label: 'Sign In',
                        icon: 'pi pi-sign-in'
                    }
                ],
                style : {'margin-left': '47rem'}
            }

        ]  
          
        // const profile = this.authService.getProfile()
        // if(profile){
            
        // }
    }

    onLogOut(){
        localStorage.clear()
        this.router.navigateByUrl('/login')
    }
}