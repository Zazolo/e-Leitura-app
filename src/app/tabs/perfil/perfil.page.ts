import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public login;
  constructor(
    private auth:AuthenticationService
  ) { }

  ngOnInit() {
    this.login = this.auth.getUser()
  }

  deslogar(){
    this.auth.logout();
  }
}
