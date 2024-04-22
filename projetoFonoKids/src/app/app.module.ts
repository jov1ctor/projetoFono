import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe FormsModule se você estiver usando formulários baseados em template
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module'; // Seu módulo de roteamento
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaSecundariaComponent } from './pagina-secundaria/pagina-secundaria.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importar o ReactiveFormsModule
import { CadastrarPacienteComponent } from './cadastrar-paciente/cadastrar-paciente.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    PaginaSecundariaComponent,
    CadastrarPacienteComponent
    // Adicione todos os outros componentes, diretivas e pipes aqui
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, // Importe o módulo de roteamento
    CommonModule,
    ReactiveFormsModule  // Adicionar ReactiveFormsModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent] // O componente raiz que será inicializado
})
export class AppModule { }
