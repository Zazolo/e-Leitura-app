import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarParagrafoPage } from './criar-paragrafo.page';

const routes: Routes = [
  {
    path: '',
    component: CriarParagrafoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarParagrafoPageRoutingModule {}
