import { Routes } from '@angular/router';
import {NotFoundComponent} from "./views/public/not-found/not-found.component";
import {authGuard} from "./guards/auth.guard";
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./layouts/public/public.routes').then(m => m.routes)
  },
  {
    path: 'admin',
    loadChildren: () => import('./layouts/admin/admin.routes').then(m => m.routes),
    canActivate: [authGuard]
  },
  {
    path: '',
    loadChildren: () => import('./layouts/auth/auth.routes').then(m => m.routes)
  },
  { path: '**',
    loadComponent: () => import('./views/public/not-found/not-found.component').then( m => m.NotFoundComponent),
  }
];
