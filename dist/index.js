"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aluno_1 = require("./models/aluno");
var pedrinho = new aluno_1.Aluno("pedrinho", 16);
pedrinho.detalhar();
pedrinho.andar("cima");
pedrinho.chorar(51);
var mariazinha = new aluno_1.Aluno("mariazinha", 30);
mariazinha.detalhar();
mariazinha.andar("cima");
mariazinha.chorar(50);