// src/app/services/pacientes.service.ts

import { Injectable } from '@angular/core';
import { Paciente } from './pacienteCadastrado';
import { PacienteFono } from './pacienteUsadoFono';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private pacientes: Paciente[] = [];
  private pacientesFono: PacienteFono[] = [];
  private listaExercicios: any[] = [];
  private listaAuxiliar: any[]=[];

  // constructor() {
  //   // Adicionar alguns pacientes iniciais
  //   this.pacientes.push(new Paciente(1, 'João Silva', 30));
  //   this.pacientes.push(new Paciente(2, 'Maria Souza', 25));
  // }

  getPacientes(): Paciente[] {
    return this.pacientes;
  }

  getPacientesFono(): PacienteFono[] {
    return this.pacientesFono;
  }

  addPaciente(paciente: Paciente): void {
    this.pacientes.push(paciente);
  }

  addExercise(pacienteFono: PacienteFono): void{
    this.pacientesFono.push(pacienteFono);
  } 
  getPacienteFonoByName(nome: string): PacienteFono[] | undefined {
    return this.pacientesFono.filter(paciente => paciente.nome === nome);
  }

  getpacienteByName(nome: string): Paciente | undefined {
    return this.pacientes.find(paciente => paciente.nome === nome);
  }

  getExercisesFonoByName(nome:string): any[]| undefined{
    this.listaAuxiliar=[];
    this.pacientesFono.forEach(paciente => {
      if(paciente.nome == nome){
        this.listaAuxiliar.push(paciente.exercicios);
      }
    });
    return this.listaAuxiliar;
  }

}
