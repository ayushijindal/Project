import { Component } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent {
  clients:Client[];
  constructor(private service:ClientService){}
  ngOnInit(){
    this.service.getAllClients().subscribe(ob=>this.clients=ob);
  }
  delete(id:number){
    //api to delete from backedn
    this.service.deleteById(id).subscribe(()=>alert("Client Deleted"));
    this.clients= this.clients.filter((item)=>item.id!==id);
    //refresh products array to show a quick changes
  }
}
