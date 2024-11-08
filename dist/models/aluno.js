"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    constructor(_nome, _idade) {
        this.nome = _nome;
        this.idade = _idade;
    }
    andar(direcao) {
        console.log("Aluno esta andando na direção ", direcao);
    }
    chorar(qtdLitros) {
        console.log(`O ${this.nome} chorou  ${qtdLitros} litros`);
    }
    detalhar() {
        console.log(`O aluno ${this.nome} tem a idade ${this.idade}`);
    }
}
exports.Aluno = Aluno;
