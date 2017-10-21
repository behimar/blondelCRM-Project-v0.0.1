import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { BrowserModule} from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import {BienvenidoComponent} from "./bienvenido/bienvenido.component";
import {ContactosComponent} from "./contactos/contactos.component";
import {PersonaComponent} from "./persona/persona.component";
import {EmpresaComponent} from "./empresa/empresa.component";
import {TareasComponent} from "./tareas/tareas.component";

const routes: Routes = [
  { path: 'bienvenido', component: BienvenidoComponent},
  { path: 'contactos', component: ContactosComponent},
  { path: 'personas', component: PersonaComponent},
  { path: 'empresa', component: EmpresaComponent},
  { path: 'tareas', component: TareasComponent},
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule {

}




