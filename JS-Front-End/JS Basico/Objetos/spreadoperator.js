const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

const guerreiro ={fichaGuerreiro, equipoGuerreiro}

console.log(guerreiro)

/*
No exemplo acima, colocamos dois objetos dentro de um objeto, assim que imprimimos o console retornou um objeto com nome de cada objeto e chave e valores de cada.

O spread Operator, além de embaralhar os dados dos objetos pode ser usado para criar um objeto, com os dados dos objetos, no exemplo abaixo, pegamos dois objetos, colocamos dentro de um novo objeto, gerando assim, UM unico objeto, com chave e valor dos objetos colocados.


ele unificou em um.

veja o exemoplo abaixo, usando o spread operator
*/

const guerreiroMontado = {...fichaGuerreiro, ...equipoGuerreiro}
// Mas cuidado, se os objetos tiverem a mesma chave dentro, o spread operator vai sobreeescrever os valores, deixando sempre o ultimo inserido.


console.log(guerreiroMontado)