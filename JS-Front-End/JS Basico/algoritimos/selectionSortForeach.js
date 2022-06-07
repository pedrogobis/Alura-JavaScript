const livros = require('./listaLivros');
const menorValor = require('./menorValor');

livros.forEach((_, indice)=>{ // como não vamos usar o LIVRO em lugar nenhum colocamos um underline.
    let menor = menorValor(indice) // vai guardar o indice do valor da chave do objeto com menor valor
    let livroAtual = livros[indice] // vai guardar o objeto na posicao atual
  
    let livroMenorPreco = livros[menor] // vai guardar objeto que tem o menor preço
   

    // agora vamos trocar as informações para deixar a lista ordenada
    livros[indice] = livroMenorPreco;
    livros[menor] = livroAtual
})
console.log(livros)