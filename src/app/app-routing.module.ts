import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientlistComponent } from './clients/clientlist/clientlist.component';
import { ClientformComponent } from './clients/clientform/clientform.component';
import { ClienteditComponent } from './clients/clientedit/clientedit.component';

const routes: Routes = [
  {path:'clientlist',component:ClientlistComponent},
  {path:'clientform',component:ClientformComponent},
  {path:'clientlist/editclient/:id',component:ClienteditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
