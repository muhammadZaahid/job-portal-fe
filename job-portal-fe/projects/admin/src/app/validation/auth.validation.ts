import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { AuthService } from "../services/auth.service"

export const authValidationLogin = () => {

    const router = inject(Router)
    const auth = inject(AuthService)
    const profile = auth.getProfile()

    if (profile) {
        router.navigateByUrl('/dashboard')
    }
    return true
}

export const authValidation = () => {

    const router = inject(Router)
    const auth = inject(AuthService)
    const profile = auth.getProfile()

    if (!profile) {
        router.navigateByUrl('/login')
    }
    return true
}