import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from "./app.routing";
import {ComponentsModule} from "./Components/components.module";

import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ContactosComponent } from './contactos/contactos.component';
import { PersonaComponent } from './persona/persona.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { TareasComponent } from './tareas/tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    ContactosComponent,
    PersonaComponent,
    EmpresaComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
