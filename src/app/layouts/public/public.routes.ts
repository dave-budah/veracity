import {Route} from "@angular/router";
import {PublicComponent} from "./public.component";
import {BlogComponent} from "../../views/public/blog/blog.component";
import {HomeComponent} from "../../views/public/home/home.component";

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
        component: HomeComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      }
    ]
  }
]
