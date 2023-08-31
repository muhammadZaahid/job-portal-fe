import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector : 'register',
    templateUrl : './register.component.html'
})
export class RegisterComponent{
    
    loading = false

    constructor(
        private userService : UserService,
        private fb : NonNullableFormBuilder,
        private router : Router
    ){}

    registerReq = this.fb.group({
        fullName: ['',[Validators.required]],
        email : ['',[Validators.required]],
        password : ['',[Validators.required]]
    })

    onRegister(){
        if(this.registerReq.valid){
            this.loading = true
            const request = this.registerReq.getRawValue()
            this.userService.insertUser(request).subscribe(result=>{
                console.log(result)
                this.registerReq.reset()
                this.loading = false
                this.router.navigateByUrl("/login")
            })
        }else{
            console.log('Invalid')
        }
    }
}