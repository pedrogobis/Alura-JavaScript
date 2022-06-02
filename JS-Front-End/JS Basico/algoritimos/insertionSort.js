// inserindo antes corretamente.

const livros = require('./listaLivros');

function insertionSort(lista){
    lista.forEach((item,indice) => {
        let analise = indice;
        while(lista[analise.preco] < lista[analise - 1].preco){ // tentei fazer esse menos um antes mas por algum motivo, de logica provavelmente não rolou
            let itemAnalise = lista[indice]
            let itemAnterior = lista[menor]

            livros[indice] = livroMenorPreco;
            livros[menor] = livroAtual
        }
    });
    
    console.log(lista)
}