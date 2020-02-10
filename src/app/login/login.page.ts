import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private login;
  private senha;
  
  constructor(
    private route:Router
  ) { }

  ngOnInit() {
  }

  goCadastrar(){
    this.route.navigate(['/cadastro']);
  }

  logar(){
    
  }

}
