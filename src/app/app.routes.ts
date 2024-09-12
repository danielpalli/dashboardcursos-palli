import { Routes } from '@angular/router';
import DashboardLayoutComponent from './presentation/dashboard/layouts/dashboard-layout/dashboard-layout.component';
import AuthLayoutComponent from './presentation/auth/layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./presentation/auth/pages/login-page/login-page.component'),
      },
      {
        path: 'registro',
        loadComponent: () =>
          import('./presentation/auth/pages/register-page/register-page.component'),
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
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./presentation/dashboard/pages/dashboard-page/dashboard-page.component'),
      },
      {
        path: 'cursos/:tecnologia/:id',
        loadComponent: () =>
          import('./presentation/dashboard/pages/course-info-page/course-info-page.component'),
      },
      {
        path: 'cursos',
        loadComponent: () =>
          import('./presentation/dashboard/pages/course-page/course-page.component'),
      },
      {
        path: 'usuarios/informacion/:id',
        loadComponent: () =>
          import('./presentation/dashboard/pages/user-info-page/user-info-page.component'),
      },
      {
        path: 'usuarios',
        loadComponent: () =>
          import('./presentation/dashboard/pages/user-page/user-page.component'),
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
