// src/app/models/paciente.ts

export class Paciente {
    constructor(
        public id: number,
        public nome: string,
        public idade: number,
        public frequencia: string
        // public pagamento: string
    ) {}
}