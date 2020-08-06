import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { historiaAll } from '../interfaces/historias-all';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  private masterURL:string = "http://eleitura.nie.iff.edu.br:2424";

  private lastHistoriaLoaded = new BehaviorSubject(null);
  constructor(
    private http:HttpClient,
    private auth:AuthenticationService
  ) { }

  getLast(){
    return this.lastHistoriaLoaded.value;
  }

  obterDisponiveis():Promise<[historiaAll]>{
    return new Promise((resolve, reject) => {
      let token = this.auth.getToken();
      console.log("token --> " + token);
      var headers = new HttpHeaders().set('content-type', 'application/json').set('x-access-token', token);
      this.http.get(this.masterURL + "/sala/disponiveis/", {headers})
        .subscribe((response:any) => {
          console.log(response);
          resolve(response);
        }, error => {
          console.log(error);
        });
    });
  }

  getIt(id, senha){
    return new Promise((resolve, reject) => {
      let token = this.auth.getToken();
      console.log("token --> " + token);
      var headers = new HttpHeaders().set('content-type', 'application/json').set('x-access-token', token);
      this.http.get(this.masterURL + "/sala/"+id+"/"+senha, {headers})
        .subscribe((data:any) => {
          console.log(data);
          this.lastHistoriaLoaded.next(data);
          resolve(this.lastHistoriaLoaded.value);
        }, error => {
          console.log(error);
        });
    });
  }

  
  votar(idParagrafo){
    let token = this.auth.getToken();
    console.log("token --> " + token);
    return new Promise((resolve, reject) => {
      var headers = new HttpHeaders().set('content-type', 'application/json').set('x-access-token', token);
      this.http.put(this.masterURL + "/paragrafo/"+idParagrafo, {}, {headers})
        .subscribe((data:any) => {
          resolve(true);
        }, error => {
          console.log(error);
        });
    });
  }

  removerParagrafo(id){
    return new Promise((resolve, reject) => {
      let token = this.auth.getToken();
      console.log("token --> " + token);
      return new Promise((resolve, reject) => {
        var headers = new HttpHeaders().set('content-type', 'application/json').set('x-access-token', token);
        this.http.delete(this.masterURL + "/paragrafo/"+id, {headers})
          .subscribe((data:any) => {
            resolve(true);
          }, error => {
            console.log(error);
          });
      });
    });
  }

  criarParagrafo(texto, historia_id){
    return new Promise((resolve, reject) => {
      let token = this.auth.getToken();
      console.log("token --> " + token);
      return new Promise((resolve, reject) => {
        var headers = new HttpHeaders().set('content-type', 'application/json').set('x-access-token', token);
        let post = {texto:texto};
        this.http.post(this.masterURL + "/sala/"+historia_id+"/paragrafo/", post, {headers})
          .subscribe((data:any) => {
            resolve(true);
          }, error => {
            console.log(error);
          });
      });
    });
  }

  criarHistoria(texto, titulo, tempo_ciclo, total_ciclos, senha){
    return new Promise((resolve, reject) => {
      return new Promise((resolve, reject) => {
        let token = this.auth.getToken();
        console.log("token --> " + token);
        return new Promise((resolve, reject) => {
          var headers = new HttpHeaders().set('content-type', 'application/json').set('x-access-token', token);
          let post = {paragrafo:texto, tempo_ciclo:tempo_ciclo, total_ciclos:total_ciclos, titulo:titulo};
          if(senha != undefined){
            post = {...post, ...{senha:senha}};
          }
          this.http.post(this.masterURL + "/sala/", post, {headers})
            .subscribe((data:any) => {
              resolve(true);
            }, error => {
              console.log(error);
            });
        });
      });
    });
  }

  finalizarHistoria(idHistoria){
    return new Promise((resolve, reject) => {
      /*
      this.http.put("http://localhost:2424/historia/" + idHistoria + "/finalize/", {}, {authentication:this.auth.getToken()}).then((response) => {
        resolve(true);
      }).catch(error => {
        console.log("Erro ao finalizar a historia!");
        console.log(error);
        reject(false);
      })
      */
    })
  }

  getRankHistoria(idHistoria){
    return new Promise((resolve, reject) => {
      /*
      this.http.get("http://localhost:2424/historia/" + idHistoria + "/rank/", {}, {authentication:this.auth.getToken()}).then((response) => {
        if(response.data != undefined){
          resolve(JSON.parse(response.data));
        }
        resolve(false);
      }).catch(error => {
        console.log("Erro ao obter o rank da historia!");
        console.log(error);
        reject(false);
      })
      */
    })
  }
  
}
