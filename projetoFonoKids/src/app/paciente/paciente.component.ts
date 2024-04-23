import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.scss'
})
export class PacienteComponent {
  constructor(private pacientesService: PacientesService) {}
  pacienteFono = this.pacientesService.getPacientes(); // Certifique-se de que este método retorne PacienteFono[]

  listaExercicios: any[] | undefined;
  selectedPatient: any = null;

  onSelect(target: EventTarget | null): void {
    const selectElement = target as HTMLSelectElement;
    const patientName = selectElement.value;
    this.selectedPatient = this.pacientesService.getpacienteByName(patientName);
    this.listaExercicios=this.pacientesService.getExercisesFonoByName(patientName);
    console.log('lista exercicios= ',this.listaExercicios);
  }

  realizarExercicio(exercise: any): void {
    console.log(`Realizando exercício: ${exercise.exercise}`);
    // Aqui você pode implementar a lógica para marcar um exercício como realizado
    // ou abrir um modal/dialog com informações do exercício, etc.
  }
}
