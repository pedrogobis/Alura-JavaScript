const listaLivros = require('./array');
const trocaLugar = require('./encontramenores');

function quickSort(array, esquerda, direita){
    if(array.length >1){
        let indiceAtual = particiona(array, esquerda, direita)
        if(esquerda < indiceAtual - 1){
            quickSort(array, esquerda, indiceAtual - 1);
        }
        if(indiceAtual < direita){
            quickSort(array, indiceAtual, direita)
        }
    }

    return array;
}


function particiona(array, esquerda, direita){
    console.log('array ',array)
    console.log('esquerda e direita', esquerda, direita)
    let pivo = array[Math.floor((esquerda +direita)/2)] // queremos pegar o objeto.
    let atualEsquerda = esquerda;
    let atualDireita = direita;
    
    // primeiro de tudo, vamos definir quando esse algoritimo para de funcionar
    while(atualEsquerda <= atualDireita){// fazendo eles pararem antes de se cruzar
        while(array[atualEsquerda].preco < pivo.preco){
            atualEsquerda++
        }
        while(array[atualDireita].preco > pivo.preco){
            atualDireita--
        }
        if(atualEsquerda <= atualDireita){
            trocaLugar(array,atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

const caraio = listaLivros.length - 1;

console.log(quickSort(listaLivros, 0, caraio))