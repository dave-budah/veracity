import {Route} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "../../views/auth/login/login.component";
import {SignupComponent} from "../../views/auth/signup/signup.component";
import {authGuard} from "../../guards/auth.guard";

export const routes: Route[] = [
  {
    path: '',
    component: AuthComponent,
    title: 'Login',
    children: [
      {
        path: '', redirectTo: 'login', pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
        canActivate: [authGuard]
      },
      {
        path: 'signup',
        component: SignupComponent,
        title: 'Signup'
      }

      ]
  }
]
