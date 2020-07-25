import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriaService } from '../services/historia.service';

@Component({
  selector: 'app-criar-historia',
  templateUrl: './criar-historia.page.html',
  styleUrls: ['./criar-historia.page.scss'],
})
export class CriarHistoriaPage implements OnInit {


  private stage = 0;

  private texto = '';
  private titulo = '';
  private senha = '';
  private quantidade_ciclos = 1;
  private tempo_ciclo = 1;

  constructor(
    private route:Router,
    private hist:HistoriaService
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
    this.hist.criarHistoria(this.texto, this.titulo, this.tempo_ciclo, this.quantidade_ciclos, this.senha).then((ok) => {
      this.route.navigate(['/historias']);
      alert("História Criada com sucesso!");
    }).catch(e => {
      console.log(e);
      alert("Erro ao criar a historia!");
    })
  }

  ngOnInit() {
    this.stage = 0;
  }

}
