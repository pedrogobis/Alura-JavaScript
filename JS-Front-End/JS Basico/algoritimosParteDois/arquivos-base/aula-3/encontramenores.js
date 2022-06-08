const listaLivros = require('./array');


function encontraMenores(pivo, array){
    let menores= 0;

    for(let atual = 0; atual < array.length; atual++){
        let produtoAtual = array[atual];
        
        if(produtoAtual.preco < pivo.preco){
            menores++
        }
    }

    // não saquei muito bem como o indexOf vai funcionar aqui mas beleza

    // certo até o momento o troca lugar só mudou a posicao do pivo para ate aquantidade de itens que temos menor que 5 mas n fez nenhuma outra auteração 
    trocaLugar(array, array.indexOf(pivo), menores);
    return array // funcao sempre precisa retornar algo se quer exibir
}

// funcao para fazer as trocas, vai receber 3 parametros, o array, o começo e o finla
function trocaLugar(array, de, para){
    // variaveis com a posicao de começar e terminar dentro do array informado
    const elem1 = array[de];
    const elem2 = array[para];
    
    array[para] = elem1;
    array[de]=  elem2;

}

function divideNoPivo(array){
    // definimos o pivo no meio do array
    let pivo = array[Math.floor(array.length/2)]; // a divisao deve voltar uma posicao, não um numero. // um objeto
    console.log(pivo)
    encontraMenores(pivo, array)
    let valoresMenores = 0;
    for(let analisando =0; analisando < array.length; analisando++){
        let atual = array[analisando];
        if(atual.preco <= pivo.preco && atual !== pivo){ 
            trocaLugar(array, analisando, valoresMenores);
            valoresMenores++
        }
    }

    return array
}

console.log(divideNoPivo(listaLivros))
//console.log(encontraMenores(listaLivros[2], listaLivros))

module.exports = trocaLugar;