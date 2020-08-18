import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
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

  private masterURL:string = "http://eleitura.nie.iff.edu.br";
  //private masterURL:string = "http://localhost";

  constructor(private storage: Storage, private plt: Platform, private http: HttpClient) { 
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
      let post = {login:login, senha:senha, nome:nome};
      var headers = new HttpHeaders().set('content-type', 'application/json');
      this.http.post(this.masterURL + "/autenticacao/novo/", post, {headers})
        .subscribe(data => {
          console.log(data);
          resolve(data);
        }, error => {
          console.log(error);
        });
    });
  }

  
  login(login:string, senha:string):Promise<boolean> {
    return new Promise((resolve, reject) => {
      let post = {login:login, senha:senha};
      var headers = new HttpHeaders().set('content-type', 'application/json');
      this.http.post(this.masterURL + "/autenticacao/", post, {headers})
        .subscribe(response => {
          console.log(response);
          console.log("AQUIII!");
          if(response != null) {
            let parsed_response:any = response;
            console.log(parsed_response);
            this.storage.set(TOKEN_KEY, parsed_response.token).then(() => {
              console.log("Inserindo token--->" + parsed_response.token);
              this.authenticationState.next(true);
              this.storage.set('usuario', login).then((ok) => {
                this.userAuthenticated.next(login);
                resolve(true);
              })
            });
          } else {
            console.log("REJEITADO!");
            reject(false)
          }

        }, error => {
          console.log("AQUIII! NO ERROR!");
          console.log(error);
          reject(false);
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
