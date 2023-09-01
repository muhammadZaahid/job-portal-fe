import { Component } from "@angular/core";
import { NonNullableFormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../../../services/user.service";

@Component({
    selector: 'user-create',
    templateUrl: './user-create.component.html'
})
export class UserCreateComponent {

    userInsertReqDto = this.fb.group({
        email: [''],
        fullName: [''],
        phone: [''],
        password: ['']
    })

    constructor(
        private userService: UserService,
        private router: Router,
        private fb: NonNullableFormBuilder
    ) {}

    onAdd() {
        if (this.userInsertReqDto.valid) {
            const request = this.userInsertReqDto.getRawValue()
            this.userService.addUser(request).subscribe(result => {
                this.router.navigateByUrl("/admin/user")
                console.log(result)
            })
        } else {
            console.log('Invalid')
        }
    }

}