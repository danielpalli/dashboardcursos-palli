import { Routes } from '@angular/router';
import DashboardLayoutComponent from './features/dashboard/layouts/dashboard-layout/dashboard-layout.component';
import AuthLayoutComponent from './features/auth/layouts/auth-layout/auth-layout.component';
import { isAuthenticatedGuard } from './features/auth/guards/isAuthenticated.guard';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/pages/login-page/login-page.component'),
      },
      {
        path: 'registro',
        loadComponent: () =>
          import('./features/auth/pages/register-page/register-page.component'),
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    canActivate: [isAuthenticatedGuard],
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/pages/dashboard-page/dashboard-page.component'),
      },
      {
        path: 'cursos/:tecnologia/:id',
        loadComponent: () =>
          import('./features/dashboard/pages/course-info-page/course-info-page.component'),
      },
      {
        path: 'cursos',
        loadComponent: () =>
          import('./features/dashboard/pages/course-page/course-page.component'),
      },
      {
        path: 'usuarios/informacion/:id',
        loadComponent: () =>
          import('./features/dashboard/pages/user-info-page/user-info-page.component'),
      },
      {
        path: 'usuarios',
        loadComponent: () =>
          import('./features/dashboard/pages/user-page/user-page.component'),
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
