const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for(let atual= 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual) // vai guardar o indice do valor da chave do objeto com menor valor
    let livroAtual = livros[atual] // vai guardar o objeto na posicao atual
    console.log(atual)
    console.log(livroAtual)
    let livroMenorPreco = livros[menor] // vai guardar objeto que tem o menor preço
    console.log(livroMenorPreco)

    // agora vamos trocar as informações para deixar a lista ordenada
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual

}
console.log(livros)

