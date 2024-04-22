import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesService } from '../pacientes.service';
import { FormsModule } from '@angular/forms'; // Importe FormsModule se você estiver usando formulários baseados em template
import {PacienteFono} from '../pacienteUsadoFono';
import {Paciente} from '../pacienteCadastrado';

@Component({
  selector: 'app-fonoaudiologo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fonoaudiologo.component.html',
  styleUrl: './fonoaudiologo.component.scss'
})
export class FonoaudiologoComponent {
  constructor(private pacientesService: PacientesService) {}
  nomeMembro: string = '';
  exerciciosPaciente: any | undefined;
  listaExercicios: any[] | undefined;
  arrayDeObjetos: any[]=[];
  pacienteFonoInc: PacienteFono | undefined;
  // pacienteFono = this.pacientesService.getPacientesFono(); // Certifique-se de que este método retorne PacienteFono[]
  pacienteFono = this.pacientesService.getPacientes(); // Certifique-se de que este método retorne PacienteFono[]
  novoExercicio = {
    nome: '',
    descricao: '',
    frequencia: '',
    observacoes: ''
  };

  exercicioNome = {
    nome: '',
    descricao: '',
    frequencia: '',
    observacoes: '',
    nomePaciente:''
  };

  selectedPatient: any = null;
  
  onSelect(target: EventTarget | null): void {
    const selectElement = target as HTMLSelectElement; // Cast para HTMLSelectElement
    const patientName = selectElement.value;
    this.nomeMembro=patientName;
    this.selectedPatient = this.pacientesService.getpacienteByName(patientName);
    this.listaExercicios=this.pacientesService.getExercisesFonoByName(this.nomeMembro);
  }

  adicionarExercicio(){
    this.pacienteFonoInc = new PacienteFono(this.nomeMembro,[{'exercicio':this.novoExercicio.nome,'descricao':this.novoExercicio.descricao,'frequencia':this.novoExercicio.frequencia,'observacao':this.novoExercicio.observacoes}]);
    this.pacientesService.addExercise(this.pacienteFonoInc);
    this.listaExercicios=this.pacientesService.getExercisesFonoByName(this.nomeMembro);
    this.limparFormulario();
  }
  limparFormulario(): void {
    this.novoExercicio = { nome: '', descricao: '', frequencia: '', observacoes: '' };
  }
}