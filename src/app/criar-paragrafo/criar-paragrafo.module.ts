import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarParagrafoPageRoutingModule } from './criar-paragrafo-routing.module';

import { CriarParagrafoPage } from './criar-paragrafo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarParagrafoPageRoutingModule
  ],
  declarations: [CriarParagrafoPage]
})
export class CriarParagrafoPageModule {}
