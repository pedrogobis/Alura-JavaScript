const colecionador ={
    nome: 'Joao do quadriho',
    idade: 21,
    tipocolecao: ['quadrinhos'],
    contato: 'joaoloco13@gmail.com',
    // estamos dando uma função para o objeto que vai adicionar conteudo a coleção
    adicionarTipo: function(propriedade, tipo){
        this[propriedade].push(tipo)
    },
    adicionarAoTipo2: (tiponovo) =>{
        colecionador.tipocolecao.push(tiponovo) // por algum motivo this n acessou corretamente com o push.
    }
}

console.log(colecionador)

for(let i = 0; i < 4 ; i++){
    colecionador.adicionarTipo('tipocolecao', 'HQ' +i)// o i+ concatenou a formula.
}
console.log(colecionador)

// usando a minha funcao
/*
colecionador.adicionarAoTipo2('marcos')
*/
for(let i = 0; i< 6 ; i++){
    colecionador.adicionarAoTipo2('MANGÁ' +i)
}

console.log(colecionador)