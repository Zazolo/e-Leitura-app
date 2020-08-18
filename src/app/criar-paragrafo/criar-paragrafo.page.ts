import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriaService } from '../services/historia.service';

@Component({
  selector: 'app-criar-paragrafo',
  templateUrl: './criar-paragrafo.page.html',
  styleUrls: ['./criar-paragrafo.page.scss'],
})
export class CriarParagrafoPage implements OnInit {

  public texto:string;
  constructor(
    private route:Router,
    private historiaService:HistoriaService
  ) { }

  ngOnInit() {
  }

  criar(){
    if(this.texto.length > 5){
      let lastHistoria = this.historiaService.getLast();
      this.historiaService.criarParagrafo(this.texto, lastHistoria.id, lastHistoria.ciclo_atual).then((ok) => {
        this.historiaService.getIt(lastHistoria.id, lastHistoria.senha);
        this.route.navigateByUrl('/ver-historia');
      }).catch((fail) => {
        console.log(fail);
        alert("Ocorreu um erro ao tentar postar! Tente novamente mais tarde!");
      })
    } else {
      alert("O texto precisa conter no mínimo 5 caracteres para ser postado!");
    }
  }

}
