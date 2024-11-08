type direcao = "cima" | "baixo" | "esquerda" | "direita";

type movimento = {
    direcao: direcao; 
    qtdPassos: number;
}

function movimentar(muve: movimento){
    console.log(`O personagem andou ${muve.qtdPassos} passos para ${muve.direcao}`)
}

movimentar({direcao: "cima", qtdPassos: 2});




