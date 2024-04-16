import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fonoaudiologo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fonoaudiologo.component.html',
  styleUrl: './fonoaudiologo.component.scss'
})
export class FonoaudiologoComponent {
  patients = [
    { name: 'Pedro', exercises: [
      { exercise: 'Exercício 1', description: 'Respiração profunda', frequency: 'Diariamente', notes: 'Sem restrições' },
      { exercise: 'Exercício 2', description: 'Articulação', frequency: '3 vezes por semana', notes: 'Focar em vogais' }
    ]},
    { name: 'Maria', exercises: [
      { exercise: 'Exercício A', description: 'Modulação de voz', frequency: 'Semanalmente', notes: 'Controlar o volume' },
      { exercise: 'Exercício B', description: 'Fluência', frequency: 'Diariamente', notes: 'Atenção à respiração' }
    ]},
    { name: 'Caio', exercises: [
      { exercise: 'Exercício X', description: 'Exercício de sopro', frequency: 'Diariamente', notes: 'Usar apito' },
      { exercise: 'Exercício Y', description: 'Alongamento', frequency: '2 vezes por semana', notes: 'Relaxar o maxilar' }
    ]}
  ];

  selectedPatient: any = null;

  onSelect(target: EventTarget | null): void {
    const selectElement = target as HTMLSelectElement; // Cast para HTMLSelectElement
    const patientName = selectElement.value;
    this.selectedPatient = this.patients.find(p => p.name === patientName) || null;
  }
}