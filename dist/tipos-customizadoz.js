"use strict";
function movimentar(muve) {
    console.log(`O personagem andou ${muve.qtdPassos} passos para ${muve.direcao}`);
}
movimentar({ direcao: "cima", qtdPassos: 2 });
