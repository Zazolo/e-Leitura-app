import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerHistoriaPage } from './ver-historia.page';

const routes: Routes = [
  {
    path: '',
    component: VerHistoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerHistoriaPageRoutingModule {}
