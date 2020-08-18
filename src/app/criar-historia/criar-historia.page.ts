import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriaService } from '../services/historia.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-criar-historia',
  templateUrl: './criar-historia.page.html',
  styleUrls: ['./criar-historia.page.scss'],
})
export class CriarHistoriaPage implements OnInit {


  public stage = 0;

  public texto = '';
  public titulo = '';
  public senha = '';
  public quantidade_ciclos = 1;
  public tempo_ciclo = 1;

  constructor(
    private route:Router,
    private hist:HistoriaService,
    private alertCtrl:AlertController
  ) { }

  avancarStage(){
    this.stage++;

    switch(this.stage){
      case 1:
        if(this.texto.length < 15){
          alert("Texto inválido! Digite ao menos 15 caracteres!");
          this.recuarStage();
        }
        break;
      case 2:
        if(this.titulo.length < 5){
          alert("Título inválido! Digite ao menos 5 caracteres!");
          this.recuarStage();
        }
        break;
    }
  }

  recuarStage(){
    this.stage--;
  }

  publicar(){
    this.hist.criarHistoria(this.texto, this.titulo, this.tempo_ciclo, this.quantidade_ciclos, this.senha).then(async (ok) => {
      console.log("Recebeu aqui...", ok);
      const alert = await this.alertCtrl.create({
        message: "História criada com sucesso!",
        buttons: ['Ok']
      });
      await alert.present();
      this.route.navigate(['/tabs/historias']);
    }).catch(async e => {
      console.log(e);
      const alert = await this.alertCtrl.create({
        message: "Erro ao criar a história! Tente novamente mais tarde!",
        buttons: ['Ok']
      });
      await alert.present();
    })
  }

  ngOnInit() {
    this.stage = 0;
  }

}
