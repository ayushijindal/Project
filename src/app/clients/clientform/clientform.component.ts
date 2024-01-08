import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clientform',
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.css']
})
export class ClientformComponent {
  client:Client={id:1,name:'',
  company:'',project:'', meeting_schedule:''};

  constructor(private http:ClientService,private router:Router){}
  onSubmit(){
    console.log(this.client);
    this.http.addClient(this.client)
    .subscribe(resp=>console.log(resp));
    alert("Client Added");
    this.router.navigate(['clientlist'])
  }
}
