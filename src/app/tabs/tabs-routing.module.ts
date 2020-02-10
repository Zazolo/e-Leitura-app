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
        path: 'buscar',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/buscar/buscar.module').then(m => m.BuscarPageModule)
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
    redirectTo: '/tabs/historias',
    pathMatch: 'full'
  },
  {
    path: 'historias',
    loadChildren: () => import('./historias/historias.module').then( m => m.HistoriasPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./buscar/buscar.module').then( m => m.BuscarPageModule)
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
