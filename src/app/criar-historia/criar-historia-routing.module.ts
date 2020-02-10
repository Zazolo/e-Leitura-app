import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarHistoriaPage } from './criar-historia.page';

const routes: Routes = [
  {
    path: '',
    component: CriarHistoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarHistoriaPageRoutingModule {}
