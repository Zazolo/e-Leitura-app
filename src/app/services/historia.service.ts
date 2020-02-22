import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { AuthenticationService } from './authentication.service';
import { historiaAll } from '../interfaces/historias-all';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  private lastHistoriaLoaded = new BehaviorSubject(null);
  constructor(
    private http:HTTP,
    private auth:AuthenticationService
  ) { }

  getLast(){
    return this.lastHistoriaLoaded.value;
  }

  obterDisponiveis():Promise<[historiaAll]>{
    return new Promise((resolve, reject) => {
      let token = this.auth.getToken();
      console.log("token --> " + token);
      this.http.get("http://192.168.43.64/historia/all/", {}, {authentication:token}).then((response) => {
        resolve(JSON.parse(response.data));
      }).catch(error => {
        console.log("Ocorreu algum erro ao obter TODAS as HISTORIAS.");
        console.log(error);
        reject(null);
      })
    });
  }

  getIt(id, senha){
    return new Promise((resolve, reject) => {
      this.http.get("http://192.168.43.64/historia/" + id, {senha:senha}, {authentication:this.auth.getToken()}).then((response) => {
        this.lastHistoriaLoaded.next(JSON.parse(response.data));
        resolve(this.lastHistoriaLoaded.value);
      })
    })
  }

  votar(idParagrafo){
    return new Promise((resolve, reject) => {
      this.http.put("http://192.168.43.64/paragrafo/"+idParagrafo+"/votar/", {}, {authentication:this.auth.getToken()}).then((response) => {
        resolve(true);
      }).catch((error) => {
        console.log("Erro ao votar <<<<<<<<<<<<<");
        console.log(error);
        reject(false)     
      });
    });
  }

  removerParagrafo(id){
    return new Promise((resolve, reject) => {
      this.http.delete("http://192.168.43.64/paragrafo/"+id, {}, {authentication:this.auth.getToken()}).then((response) => {
        resolve(true);
      }).catch((error) => {
        console.log("Erro ao remover <<<<<<<<<<<<<");
        console.log(error);
        reject(false)     
      });
    });
  }

  criarParagrafo(texto, historia_id){
    return new Promise((resolve, reject) => {
      this.http.post("http://192.168.43.64/paragrafo/", {texto:texto, historia_id:historia_id}, {authentication:this.auth.getToken()}).then((response) => {
        resolve(true);
      }).catch((error) => {
        console.log("Erro ao criar o parágrafo <<<<<<<<<<<<<");
        console.log(error);
        reject(false)     
      });
    });
  }

  criarHistoria(texto, titulo, tempo_ciclo, quantidade_ciclo, senha){
    return new Promise((resolve, reject) => {
      if(senha == ''){
        senha = null;
      }
      this.http.post("http://192.168.43.64/historia/", {texto:texto, titulo:titulo, max_ciclos:quantidade_ciclo, tempo_ciclo:tempo_ciclo, senha:senha}, {authentication:this.auth.getToken()}).then((response) => {
        resolve(true);
      }).catch((error) => {
        console.log("Erro ao criar a história <<<<<<<<<<<<<");
        console.log(error);
        reject(false)     
      });
    });
  }

  finalizarHistoria(idHistoria){
    return new Promise((resolve, reject) => {
      this.http.put("http://192.168.43.64/historia/" + idHistoria + "/finalize/", {}, {authentication:this.auth.getToken()}).then((response) => {
        resolve(true);
      }).catch(error => {
        console.log("Erro ao finalizar a historia!");
        console.log(error);
        reject(false);
      })
    })
  }

  getRankHistoria(idHistoria){
    return new Promise((resolve, reject) => {
      this.http.get("http://192.168.43.64/historia/" + idHistoria + "/rank/", {}, {authentication:this.auth.getToken()}).then((response) => {
        if(response.data != undefined){
          resolve(JSON.parse(response.data));
        }
        resolve(false);
      }).catch(error => {
        console.log("Erro ao obter o rank da historia!");
        console.log(error);
        reject(false);
      })
    })
  }
}
