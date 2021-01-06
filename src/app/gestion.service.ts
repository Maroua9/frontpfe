import { pfe } from './../model/Pfe';
import { typepfe } from './../model/TypePfe';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor( private http:HttpClient) { }
  getAllPfes(){
    return this.http.get<typepfe[]>("http://127.0.0.1:8080/rest/pfes")
  }
  getByType(){
    return this.http.get<typepfe[]>("http://127.0.0.1:8080/rest/listpfe/"+id)
  }
  delete(id:number){
    return this.http.delete("http://127.0.0.1:8080/rest/delete/"+id)
  }
  search(s: string) {
    return this.http.get<typepfe[]>('http://localhost:8080/rest/search/' + s);
  }
  add(pfe:pfe){
    return this.http.post("http://127.0.0.1:8080/rest/add/",pfe)
  }

}
