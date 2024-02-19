import {Route} from "@angular/router";
import {MessageSidenavComponent} from "./message-sidenav/message-sidenav.component";


export const routes: Route[] = [
  {
    path: '',
    component: MessageSidenavComponent,
    title: 'Messages',
    children: [
      {
        path: '', redirectTo: 'messages', pathMatch: 'full'
      },
      {
        path:'messages',
        loadComponent: () => import('./message/message.component').then(m => m.MessageComponent),
      },
      {
        path: 'compose',
        loadComponent: () => import('./message-form/message-form.component').then( m =>m.MessageFormComponent),
      }
      ]
  }
]
