import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { resolve } from 'url';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);
 
  constructor(private storage: Storage, private plt: Platform, private http: HTTP) { 
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    })
  }
 
  login(login:string, senha:string):Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post('http://192.168.0.108/autenticar/', {login:login, senha:senha}, {}).then((response)=>{
        console.log(response);
        if(response.status == 200) {
          response.data = JSON.parse(response.data);
          this.storage.set(TOKEN_KEY, 'Bearer ' + response.data.token).then(() => {
            this.authenticationState.next(true);
            resolve(true);
          });
          reject(false);
        } else {
          console.log("REJEITADO!");
          console.log(JSON.stringify(response));
          reject(false)
        }
      });  
    })
    
    
  }
 
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authenticationState.value;
  }

}
