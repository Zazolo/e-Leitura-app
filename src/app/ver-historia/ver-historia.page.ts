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

  private historia:Historia = null;
  private zone = new NgZone({enableLongStackTrace:false});
  private usuarioLogadoLogin = '';
  constructor(
    private route:Router,
    private historiaService:HistoriaService,
    private auth:AuthenticationService
  ) { }

  obterHistoria(){
    this.zone.run(()=>{
      this.historia = this.historiaService.getLast();
      console.log(this.historia);
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
      for(i = 0; i < this.historia.paragrafos.length; i++){
        if(this.historia.paragrafos[i].id == id){
          this.historia.paragrafos[i].votou = true;
        }
      }
      this.historiaService.votar(id).then((ok) => {
        console.log("Voto no paragrafo " + id + " registrado com sucesso.");
      }).catch(error => {
        this.obterHistoria();
      });
    })
    
  }

  removerParagrafo(id){
    this.zone.run(()=>{
      let i = 0;
      let paragrafo = null;
      for(i = 0; i < this.historia.paragrafos.length; i++){
        if(this.historia.paragrafos[i].id == id){
          paragrafo = this.historia.paragrafos[i];
          this.historia.paragrafos.splice(i, 1);
        }
      }
      this.historiaService.removerParagrafo(id).then((ok) => {
        console.log("Paragrafo " + id + " removido com sucesso.");
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
