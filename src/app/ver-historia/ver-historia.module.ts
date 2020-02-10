import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerHistoriaPageRoutingModule } from './ver-historia-routing.module';

import { VerHistoriaPage } from './ver-historia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerHistoriaPageRoutingModule
  ],
  declarations: [VerHistoriaPage]
})
export class VerHistoriaPageModule {}
