const livros = require('./listaLivros') // importando uma variavel dentro de outra variaavel 

console.log(livros)

let maisBarato = 0;


// ela fez a mesma coisa que eu, um for, com verificacao, porem a logica da verificação dela muito melhor, ela salvou a posicao do mais barato e não o valor, e assim referenciou depoisa na resposta.
/*
for(let atual = 0; atual < precosLivros.length; atual++){
    if(precosLivros[atual]< precosLivros[maisBarato]){
        maisBarato=atual
    }
}*/

// agora com a importação de uma variavel onde os livros estão em uma array de objetos, esse for simples não funciona, precisamos muda-lo / refatorar.

for(let atual = 0; atual < livros.length; atual++){
    if(livros[atual].preco < livros[maisBarato].preco){// ponto preco acessa o valor daquela chave no indice do array
        maisBarato=atual
    }
}

console.log(`O livro mais barato é o ${livros[maisBarato].titulo}, e custa R$${livros[maisBarato].preco}`)
/*
consegui armazenar o menor valor dentro do array, porém tem mais coisa pra fazer ai né kkk

//let atual = 0;
let maisBarato = 600000;
let guardaValor1 = 0;

//console.log(precosLivros[0]> maisBarato)

for(let atual = 0; atual < precosLivros.length; atual++){
    let recebeValor = precosLivros[atual];
    if(recebeValor < maisBarato){
        maisBarato = recebeValor;
    }
    
}

console.log(maisBarato)
*/