const listaLivros = require('./array');

function mergeSort(array, nivelAninhamento = 0){
    console.log(`nivel de aninhamento ${nivelAninhamento}`)
    console.log(array)
    // verificacao de tamanho
    if(array.length > 1){
        //vamos dividir o valor do tamanho do array, indice, precisa ser inteiro então por isso usamos o metodo mathfloor.
        const meio = Math.floor(array.length /2);
        // metodo de dividir o array no meio já tinhamos visto, tem varios tipos.
        // colocamos para ir do indice zero até a metade 
        // vamos fazer um recursivo, assim que chegar nessa variavel, ela vai se chamar e fazer a mesma coisa novamente, já vimos também isso em algum lugar
        const part1 = mergeSort(array.slice(0,meio), nivelAninhamento +1);
        // e partir da metade até o final
        const part2 = mergeSort(array.splice(meio, array.length), nivelAninhamento + 1);

        array = ordena(part1, part2);

    }
    return array;
}

function ordena(parte1, parte2){
    // vamos deixar mais facil com as tecnologias integradas do javascript, vamos usar o metodo push, com ele não precisamos do atual pelo visto, o porque? push sempre joga pro final
    let posicaoAtualpt1 = 0;
    let posicaoAtualpt2 = 0;
    let resultado = [];
   

    while(posicaoAtualpt1 < parte1.length && posicaoAtualpt2 < parte2.length){
        let produtoAtualpt1 =  parte1[posicaoAtualpt1];
        let produtoAtualpt2 = parte2[posicaoAtualpt2]

        if(produtoAtualpt1.preco < produtoAtualpt2.preco){
            resultado.push(produtoAtualpt1)
            posicaoAtualpt1++
        }else{

            // por algum motivo meu else subscrito estava dando cagada no codigo.
            resultado.push(produtoAtualpt2); 
            posicaoAtualpt2++
        };


        
    }
    // estamos concatenando os resultados, já vimos o concat no começo dessa formação.
    // estamos usando o if ternario
    // o slice ta com um parametro só está concatenando o que sobrou com a lista do resultado.
    return resultado.concat(posicaoAtualpt1< parte1.length
        ?parte1.slice(posicaoAtualpt1)
        :parte2.slice(posicaoAtualpt2))
}


console.log(mergeSort(listaLivros))