import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Historia } from '../interfaces/historia';
import { HistoriaService } from '../services/historia.service';
import { IonGrid } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-ver-historia',
  templateUrl: './ver-historia.page.html',
  styleUrls: ['./ver-historia.page.scss'],
})
export class VerHistoriaPage implements OnInit {

  public historia:any = null;
  public zone = new NgZone({enableLongStackTrace:false});
  public usuarioLogadoLogin = '';
  constructor(
    public route:Router,
    public historiaService:HistoriaService,
    public auth:AuthenticationService
  ) { }

  obterHistoria(){
    this.zone.run(()=>{
      this.historia = this.historiaService.getLast();
      console.log("Percorrendo parágrafos...");
      console.log(this.historia.paragrafos);
    });
  }

  ngOnInit() {
    
    setInterval(()=>{
      this.usuarioLogadoLogin = this.auth.getUser();
      console.log(this.usuarioLogadoLogin);
      this.obterHistoria();
    }, 3000);
      
   
  }

  criarParagrafo(){
    this.route.navigate(['/criar-paragrafo']);
  }

  votar(id){
    this.zone.run(()=>{
      let i = 0;
      for(i = 0; i < this.historia.paragrafos_votacao.length; i++){
        if(this.historia.paragrafos[i].id == id){
          this.historia.paragrafos_votacao[i] = {...this.historia.paragrafos_votacao[i], ...{votou:true}};
        } else {
          this.historia.paragrafos_votacao[i] = {...this.historia.paragrafos_votacao[i], ...{votou:false}};
        }
      }
      this.historiaService.votar(id).then((ok) => {
        console.log("Voto no paragrafo " + id + " registrado com sucesso.");
      }).catch(error => {
        console.log("Erro ao votar no parágrafo.");
        this.obterHistoria();
      });
    })
    
  }

  removerParagrafo(id){
    this.zone.run(()=>{
      let i = 0;
      let paragrafo = null;
      for(i = 0; i < this.historia.paragrafos_votacao.length; i++){
        if(this.historia.paragrafos_votacao[i].id == id){
          paragrafo = this.historia.paragrafos_votacao[i];
          this.historia.paragrafos_votacao.splice(i, 1);
        }
      }
      this.historiaService.removerParagrafo(id).then((ok) => {
        console.log("Paragrafo " + id + " removido com sucesso.");
        this.obterHistoria();
      }).catch(error => {
        alert("Erro ao remover o paragrafo!");
        this.obterHistoria();
      });
    })
  }

  finalizarHistoria(){
    this.historiaService.finalizarHistoria(this.historia.id).then(finalizou => {
      alert("Historia finalizada com sucesso!");
      this.route.navigate(['tabs', 'historia']);
    }).catch(error => {
      alert("Erro ao finalizar a historia!");
    })
  }
}
