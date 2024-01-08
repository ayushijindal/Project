import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ModelsComponent } from './models/models.component';
// import { ClientsComponent } from './clients/clients.component';
import { ClientformComponent } from './clients/clientform/clientform.component';
import { ClientlistComponent } from './clients/clientlist/clientlist.component';
import { ClienteditComponent } from './clients/clientedit/clientedit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // ModelsComponent,
    // ClientsComponent,
    ClientformComponent,
    ClientlistComponent,
    ClienteditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
