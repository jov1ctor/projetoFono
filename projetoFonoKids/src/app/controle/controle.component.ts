import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ClienteInfo {
  nome: string;
  frequencia: string;
  pagamento: string;
  diasVisita: string[];
}

@Component({
  selector: 'app-controle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controle.component.html',
  styleUrl: './controle.component.scss'
})
export class ControleComponent {
  clientes: ClienteInfo[] = [
    {
      nome: "Pedro",
      frequencia: "Semanalmente",
      pagamento: "R$ 300 por sessão",
      diasVisita: ["Terça", "Quinta"]
    },
    {
      nome: "Maria",
      frequencia: "Mensalmente",
      pagamento: "R$ 400 por sessão",
      diasVisita: ["Segunda"]
    },
    {
      nome: "Caio",
      frequencia: "Quinzenalmente",
      pagamento: "R$ 350 por sessão",
      diasVisita: ["Quarta", "Sexta"]
    }
  ];

  selectedCliente: any = null;

  onSelect(target: EventTarget | null): void {
    const selectElement = target as HTMLSelectElement; // Cast para HTMLSelectElement
    const selectedCliente = selectElement.value;
    this.selectedCliente = this.clientes.find(cliente => cliente.nome === selectedCliente) || null;
  }
  
}

