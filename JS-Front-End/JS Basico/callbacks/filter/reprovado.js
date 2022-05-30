let alunos = ['henrique', 'pedro', 'ana', 'maria'];
let notas = [3, 8.5, 6, 4];


// filter também cria outra tabela, então precisamos mandar isso para uma variavel.
// filter retorna true or false.
// sei la por que não aceitou a formula com os colchetes
// filter recebe uma função como callback
// 
let reprovados = alunos.filter((aluno, indice)=> notas[indice]< 5
)

console.log(`Reprovados esse ano ${reprovados}`)