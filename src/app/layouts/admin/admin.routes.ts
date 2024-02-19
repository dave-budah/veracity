import {Route} from "@angular/router";
import {DashboardComponent} from "../../views/admin/dashboard/dashboard.component";
import {AdminComponent} from "./admin.component";
import {ArticlesComponent} from "../../views/admin/blog/articles/articles.component";
import {CreateComponent} from "../../views/admin/blog/create/create.component";
import {TasksComponent} from "../../views/admin/tasks/tasks.component";
import {MessageComponent} from "../../views/admin/messaging/message/message.component";
import {MessageFormComponent} from "../../views/admin/messaging/message-form/message-form.component";

export const routes: Route[] = [
  {
    path: '',
    component: AdminComponent,
    title: 'Admin',
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('../../views/admin/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'blog/posts',
        loadComponent: () => import('../../views/admin/blog/articles/articles.component').then(m => m.ArticlesComponent),
      },
      {
        path: 'blog/create',
        loadComponent: () => import('../../views/admin/blog/create/create.component').then( m =>m.CreateComponent),
      },
      {
        path: 'analytics',
        component: DashboardComponent
      },
      {
        path: 'users',
        component: DashboardComponent
      },
      {
        path: 'tasks',
        component: TasksComponent
      },
      {
        path: '',
        loadChildren: () => import('../../views/admin/messaging/messaging.routes').then( m => m.routes),
      },
      ]
  }
]
