const listaLivros = require('./arrayOrdenado');

function busca(array, de, ate, valorBuscado){
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    if(de> ate){
        return -1; // poderia retornar uma mensagem também
    }

    if(valorBuscado === atual.preco ){
        return meio;
    }
    if(valorBuscado < atual.preco){ // eu estava errando a beninto aceesso a informação
        return busca(array, de, meio-1, valorBuscado)
    }
    if(valorBuscado > atual.preco){
        return busca(array, meio+1, ate, valorBuscado)
    }

}

const de = listaLivros.length 

console.log(busca(listaLivros, 0, listaLivros.length - 1, 1));