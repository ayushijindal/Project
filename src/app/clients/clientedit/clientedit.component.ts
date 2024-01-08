import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clientedit',
  templateUrl: './clientedit.component.html',
  styleUrls: ['./clientedit.component.css']
})
export class ClienteditComponent {
  id: number;
  client:Client;
  constructor(private service:ClientService,private route:ActivatedRoute,
    private router:Router){}

  ngOnInit(){
     this.id= Number(this.route.snapshot.paramMap.get('id'));
    this.service.getClientById(this.id).subscribe(ob=>this.client=ob);
  }
  onSubmit(){
    this.service.editClient(this.client,this.id).subscribe((ob)=>alert("Client updated"));
    this.router.navigate(['productlist'])
  }
}
