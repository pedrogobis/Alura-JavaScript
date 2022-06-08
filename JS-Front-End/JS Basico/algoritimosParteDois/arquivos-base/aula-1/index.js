const {edFolha, edGalho} = require('./arrays');

function juntaListas(lista1, lista2){
    let listaFinal = [];
    let posicaoatualLista1 = 0;
    let posicaoatualLista2 = 0;
    let atual = 0;

    while(posicaoatualLista1 < lista1.length && posicaoatualLista2 < lista2.length){
        let produtoAtualLista1 = lista1[posicaoatualLista1];
        let produtoAtualLista2 = lista2[posicaoatualLista2];

        if(produtoAtualLista1.preco < produtoAtualLista2.preco){
            listaFinal[atual] = produtoAtualLista1;
            posicaoatualLista1++;
        }else{ 
            listaFinal[atual] = produtoAtualLista2; 
            posicaoatualLista2++;}
            atual++
    }


    return listaFinal;
}

console.log(juntaListas(edFolha, edGalho))