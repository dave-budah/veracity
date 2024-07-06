import {Route} from "@angular/router";
import {PublicComponent} from "./public.component";
import {BlogComponent} from "../../views/public/blog/blog.component";
import {LandingComponent} from "../../views/public/landing/landing.component";


export const routes: Route[] = [
  {
    path: '',
    component: PublicComponent,
    title: 'Home',
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        component: LandingComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      }
    ]
  }
]
