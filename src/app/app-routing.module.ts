import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'tab6',
    loadChildren: () => import('./tab6/tab6.module').then( m => m.Tab6PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  
  {
    path: 'tab-administrator',
    loadChildren: () => import('./administrator/tab-administrator/tab-administrator.module').then( m => m.TabAdministratorPageModule)
  },
  {
    path: 'tab-user',
    loadChildren: () => import('./user/tab-user/tab-user.module').then( m => m.TabUserPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user-create',
    loadChildren: () => import('./administrator/user/user-create/user-create.module').then( m => m.UserCreatePageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./administrator/user/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'user-update',
    loadChildren: () => import('./administrator/user/user-update/user-update.module').then( m => m.UserUpdatePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
