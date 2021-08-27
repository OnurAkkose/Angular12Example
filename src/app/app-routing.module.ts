import { HomeModule } from './modules/home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/modules/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: 'login',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/modules/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
