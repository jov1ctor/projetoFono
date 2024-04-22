// src/app/models/paciente.ts

export class PacienteFono {
    constructor(
        public nome: string,
        public exercicios: Array<{exercicio: string, descricao: string, frequencia: string, observacao: string}>
    ) {}
}