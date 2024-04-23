// src/app/models/paciente.ts

export class Paciente {
    constructor(
        public nome: string,
        public frequencia: string,        
        public pagamento: number,
        public diasVisita: string
        // public pagamento: string
    ) {}
}