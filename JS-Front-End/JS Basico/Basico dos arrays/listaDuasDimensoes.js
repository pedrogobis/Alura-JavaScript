let alunos = ['henrique', 'pedro', 'ana', 'maria']
let mediasDosAlunos = [10, 8.5, 9, 6]
let salasDosAlunos = ['A', 'B', 'C', 'D']

let listaDeNotasEAlunos = [alunos, mediasDosAlunos, salasDosAlunos]
                            // tabelaMaster[indice da selecionada tabela][indice na tabela selecionada]
console.log(`${listaDeNotasEAlunos[0][0]}, da sala ${listaDeNotasEAlunos[2][3]}, sua media é ${listaDeNotasEAlunos[1][0]}`)
console.log(`${listaDeNotasEAlunos[0][1]}, da sala ${listaDeNotasEAlunos[2][1]}, sua media é ${listaDeNotasEAlunos[1][1]}`)
console.log(`${listaDeNotasEAlunos[0][2]}, da sala ${listaDeNotasEAlunos[2][0]}, sua media é ${listaDeNotasEAlunos[1][2]}`)
console.log(`${listaDeNotasEAlunos[0][3]}, da sala ${listaDeNotasEAlunos[2][2]}, sua media é ${listaDeNotasEAlunos[1][3]}`)

/*
Pratiquei com uma tabela com 3 tabelas.

console.log(`${listaDeNotasEAlunos[0][1][]}, sua media é ${listaDeNotasEAlunos[1][1][]}`)
console.log(`${listaDeNotasEAlunos[0][1][]}, sua media é ${listaDeNotasEAlunos[1][1][]}`)
console.log(`${listaDeNotasEAlunos[0][1][]}, sua media é ${listaDeNotasEAlunos[1][1][]}`)
console.log(`${listaDeNotasEAlunos[0][2][]}, sua media é ${listaDeNotasEAlunos[1][2][]}`)
console.log(`${listaDeNotasEAlunos[0][3][]}, sua media é ${listaDeNotasEAlunos[1][3][]}`)
*/

