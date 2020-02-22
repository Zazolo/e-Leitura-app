import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { resolve } from 'url';
import { Usuario } from '../interfaces/usuario';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);
  authenticationChecker = new BehaviorSubject(false);
  userAuthenticated = new BehaviorSubject(null);
  token = new BehaviorSubject('');

  constructor(private storage: Storage, private plt: Platform, private http: HTTP) { 
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.token.next(res);
        console.log("inserindo token --> " + this.token.value);
        this.authenticationState.next(true);
        this.storage.get('usuario').then(login => {
          this.userAuthenticated.next(login);
          this.authenticationChecker.next(true);
        })

      }
    })
  }

  getToken(){
    return this.token.value;
  }
 
  getUser(){
    return this.userAuthenticated.value;
  }
  register(login:string, senha:string, nome:string){
    console.log(nome + login + senha);
    return new Promise((resolve, reject) => {
      this.http.post('http://192.168.43.64/autenticar/novo/', {login:login, senha:senha, nome:nome}, {}).then((response) => {
        if(response.status == 200){
          console.log("Login criado com sucesso!");
          resolve(true);
        } else {
          
          reject(false);
        }
      }).catch((rejection) => {
        console.log(rejection);
        console.log("Erro ao criar o login!");
        reject(false);
      })
    });
  }

  login(login:string, senha:string):Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post('http://192.168.43.64/autenticar/', {login:login, senha:senha}, {}).then((response)=>{
        console.log(response);
        if(response.status == 200) {
          response.data = JSON.parse(response.data);
          console.log(response.data);
          this.storage.set(TOKEN_KEY, 'Bearer ' + response.data.response).then(() => {
            console.log("Inserindo token--->" + response.data.response);
            this.authenticationState.next(true);
            this.storage.set('usuario', login).then((ok) => {
              this.userAuthenticated.next(login);
              resolve(true);
            })
          });
          reject(false);
        } else {
          console.log("REJEITADO!");
          console.log(JSON.stringify(response));
          reject(false)
        }
      }).catch(error => {
        reject(null);
      });  
    })
    
    
  }
 
  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.storage.remove('usuario').then((ok) => {
        this.userAuthenticated.next(null);
        console.log("Deslogando...?");
      });
      this.authenticationState.next(false);
      console.log("Deslogando...? 22")
    });
  }
 
  isAuthenticated() {
      return this.authenticationState.value;
  }

  authenticationStateChecked(){
    return this.authenticationChecker.value;
  }

}
