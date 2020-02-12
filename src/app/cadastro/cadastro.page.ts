import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  
  constructor(private auth:AuthenticationService, private route:Router) { }


  register(values){
    this.auth.register(values.login, values.senha, values.nome).then((response:boolean) => {
      if(response){
        alert("Login criado com sucesso!");
        this.route.navigate(['/login']);
      }
    }).catch((rejeitado) => {
      alert("Erro ao criar o login!");
    })  
  }

  ngOnInit() {
  }

}
