import {CanActivateFn, Router} from '@angular/router'
import {inject} from "@angular/core"
import {UserService} from "../services/user.service"
import {ToastrService} from "ngx-toastr";
import {TokenService} from "../services/token.service";

export const authGuard: CanActivateFn = (route, state) => {
  const toastr = inject(ToastrService)
  const service = inject(UserService)
  const router = inject(Router);
  const tokenService = inject(TokenService)



  tokenService.isAuthenticated.subscribe({
    next(isAuthenticated) {
      if (isAuthenticated) {
        toastr.success('You are now logged in', '', {});
        router.navigate(['/dashboard'])
      }
    }
  })
  return true
};
