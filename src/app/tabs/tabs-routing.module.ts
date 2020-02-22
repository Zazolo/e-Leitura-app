import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'historias',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/historias/historias.module').then(m => m.HistoriasPageModule)
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: 'rank',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/rank/rank.module').then(m => m.RankPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/historias',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'historias',
    loadChildren: () => import('./historias/historias.module').then( m => m.HistoriasPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'rank',
    loadChildren: () => import('./rank/rank.module').then( m => m.RankPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
