import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseURL:string= "http://localhost:3000/clients";
  constructor(private http:HttpClient) { }

  getAllClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.baseURL);
  }
  getClientById(id:number):Observable<Client>{
    return this.http.get<Client>(this.baseURL+"/"+id)
  }
  addClient(client:Client){
    //console.log(product);
    return this.http.post(this.baseURL,client);
    //POst API call for creating new Record
  }
  editClient(client:Client,id:number){
    return this.http.put(this.baseURL+"/"+id,client)
    //update the perticular Id with Given Product Object
  }
  deleteById(id:number){
    return this.http.delete(this.baseURL+"/"+id);
  }
}
