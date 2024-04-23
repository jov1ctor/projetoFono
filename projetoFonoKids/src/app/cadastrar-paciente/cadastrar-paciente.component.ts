// cadastrar-paciente.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Importar o ReactiveFormsModule
import {Paciente} from '../pacienteCadastrado';
import { PacientesService } from '../pacientes.service';
import { PacienteFono } from '../pacienteUsadoFono';

@Component({
  selector: 'app-cadastrar-paciente',
  standalone: true,
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.scss'],
  imports:[CommonModule,ReactiveFormsModule]
})
export class CadastrarPacienteComponent {
  pacienteForm: FormGroup;
  paciente: Paciente | undefined;
  pacienteFono: PacienteFono | undefined;
  private pacientesLista: Paciente[] = [];

  constructor(
    private fb: FormBuilder,
    private pacientesService: PacientesService  // Injeção do serviço de pacientes
  ) {
    this.pacienteForm = this.fb.group({
      nome: ['', Validators.required],
      frequencia: ['', Validators.required],
      pagamento: ['', Validators.required],
      diasVisita: ['', Validators.required]  // Pode ser aprimorado para lidar com múltiplas seleções
    });
  }
  onSubmit() { 
    console.log(this.pacienteForm.value);
    // Aqui você pode adicionar lógica para enviar os dados para um serviço ou API
    console.log(this.pacienteForm.value.frequencia)
    this.paciente = new Paciente(this.pacienteForm.value.nome,this.pacienteForm.value.frequencia,this.pacienteForm.value.pagamento,this.pacienteForm.value.diasVisita);
    // this.pacienteFono = new PacienteFono(this.pacienteForm.value.nome,[{exercicio: '', descricao: '',frequencia: '', observacao: ''}]);
    console.log(this.paciente.nome)
    this.pacientesLista.push(this.paciente);    
    this.pacientesService.addPaciente(this.paciente);
    // this.pacientesService.addExercise(this.pacienteFono);
  }
}
