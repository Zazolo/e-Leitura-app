import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public senha:string = '';
  public confirm:string = '';
  
  constructor(private auth:AuthenticationService, private route:Router,
    private alertCtrl:AlertController) { }


  register(values){
    this.auth.register(values.login, values.senha, values.nome).then(async (response:boolean) => {
      if(response){
        const alert = await this.alertCtrl.create({
          message: "Cadastro realizado com sucesso!",
          buttons: ['Ok']
        });
        await alert.present();
        this.route.navigate(['/login']);
      }
    }).catch(async (rejeitado) => {
      const alert = await this.alertCtrl.create({
        message: "Erro ao cadastrar o usuário!",
        buttons: ['Ok']
      });
      await alert.present();
    })  
  }

  ngOnInit() {
  }

}
