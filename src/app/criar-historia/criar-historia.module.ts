import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarHistoriaPageRoutingModule } from './criar-historia-routing.module';

import { CriarHistoriaPage } from './criar-historia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarHistoriaPageRoutingModule
  ],
  declarations: [CriarHistoriaPage]
})
export class CriarHistoriaPageModule {}
