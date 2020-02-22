import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Observable } from 'rxjs';
import { HistoriaService } from '../../services/historia.service';
import { historiaAll } from '../../interfaces/historias-all';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-historias',
  templateUrl: './historias.page.html',
  styleUrls: ['./historias.page.scss'],
})
export class HistoriasPage implements OnInit {

  private historias = undefined;
  constructor(private auth:AuthenticationService, private hist:HistoriaService,
    private alertCtrl:AlertController, private route:Router, 
    private toasCtrl:ToastController) { }

  obterHistorias(){
    this.hist.obterDisponiveis().then((response) => {
      this.historias = response;
      console.log(response);
    }).catch(error => {
      console.log("Erro ou nenhuma historia disponível");
    })
  }
  
  ngOnInit() {
    this.obterHistorias();
  }

  async participar(id:number){
    console.log("participar da historia>>>>" + id);


    for(let i = 0; i < this.historias.length; i++){
      if(this.historias[i].id == id.toString()){

        if(this.historias[i].senha != null){
          const alert = this.alertCtrl.create({
            message: 'Senha de acesso',
            inputs: [
              {
                name: 'password',
                placeholder: 'Password',
                type: 'password'
              }
            ],
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: data => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'Entrar',
                handler: data => {
                  if(data.password == this.historias[i].senha){
                    this.enterOnHistoria(this.historias[i].id, data.password);
                  } else {
                    this.presentToastWithOptions("Senha incorreta!");
                  }
                }
              }
            ]
          });
          await (await alert).present();       
        } else {
          this.enterOnHistoria(this.historias[i].id, '');
        }




      }
    }



  }  

  enterOnHistoria(id, senha){
    this.hist.getIt(id, senha).then(response => {
      this.route.navigateByUrl('/ver-historia');
    }).catch(error => {
      this.presentToastWithOptions("Servidor não permitiu prosseguir, verifique sua senha antes de continuar.");
    });
  }
  async presentToastWithOptions(message) {
    const toast = await this.toasCtrl.create({
      message: message,
      position: 'top',
      duration:2000
    });
    toast.present();
  }

  deslogar(){
    this.auth.logout();
  }

  criar(){
    this.route.navigateByUrl('/criar-historia');
  }

  verRank(idHistoria){
    this.hist.getRankHistoria(idHistoria).then((rank:Array<{id:string, nome:string, login:string, total:number}>) => {
      for(let i=0; i<this.historias.length; i++){
        if(this.historias[i].id == idHistoria){
          this.historias[i].rank = rank;
        }
      }
    }).catch(error => {
      console.log("Erro ao obter o rank");
    })
  }

}
