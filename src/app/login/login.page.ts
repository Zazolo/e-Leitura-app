import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public login;
  public senha;
  
  constructor(
    public route:Router,
    public authService:AuthenticationService,
    public alertCtrl:AlertController
  ) { }

  ngOnInit() {
  }

  goCadastrar(){
    this.route.navigate(['/cadastro']);
  }

  async logar(){
    this.authService.login(this.login, this.senha).then(async (response) => {
      console.log("RESPONSE RECEBIDA!");
      console.log(response);
      const alert = await this.alertCtrl.create({
        message: "Seja bem-vindo!",
        buttons: ['Ok']
      });
      await alert.present();

    }).catch(async error => {
      console.log(error);
      const alert = await this.alertCtrl.create({
        message: "Nome de usuário ou senha incorreto(s)!",
        buttons: ['Ok']
      });
      await alert.present();
    })
  }

}
