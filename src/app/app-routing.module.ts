import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'criar-historia',
    loadChildren: () => import('./criar-historia/criar-historia.module').then( m => m.CriarHistoriaPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'ver-historia',
    loadChildren: () => import('./ver-historia/ver-historia.module').then( m => m.VerHistoriaPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'criar-paragrafo',
    loadChildren: () => import('./criar-paragrafo/criar-paragrafo.module').then( m => m.CriarParagrafoPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
