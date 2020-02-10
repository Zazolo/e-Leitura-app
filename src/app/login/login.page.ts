import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private login;
  private senha;
  
  constructor(
    private route:Router,
    private authService:AuthenticationService
  ) { }

  ngOnInit() {
  }

  goCadastrar(){
    this.route.navigate(['/cadastro']);
  }

  logar(){
    this.authService.login(this.login, this.senha).then((response) => {
      if(response){
        alert("LOGADO!");
      } else {
        alert("Nome de usuário ou senha incorreto!");
      }
    })
  }

}
