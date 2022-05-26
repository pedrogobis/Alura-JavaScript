let alunos = ['henrique', 'pedro', 'ana', 'maria']
let mediasDosAlunos = [[10, 6.5, 8], [8.5, 10, 7], [9, 10, 9], [6, 8, 7.3]]
let salasDosAlunos = ['A', 'B', 'C', 'D']

let listaDeNotasEAlunos = [alunos, mediasDosAlunos, salasDosAlunos]


// for que entra na mediadosalunos dentro da lista listadenotasealunos
for(let i= 0; i < listaDeNotasEAlunos[1].length; i++){
    // a media dos alunos vai receber a funcao somaitensedivide com o parametro da tabela media dos alunos
    listaDeNotasEAlunos[1][i] = somaItensEdivide(listaDeNotasEAlunos[1][i]) 

}

// for para mostrar no console um template com o nome de cada aluno, sala, e a media do aluno
for(let i = 0; i<listaDeNotasEAlunos[1].length; i++){
    console.log(`O aluno ${listaDeNotasEAlunos[0][i]}, da sala ${listaDeNotasEAlunos[2][i]}, teve a media de ${listaDeNotasEAlunos[1][i].toFixed(1)}`)
}


// funcao criada que recebe uma tabela, passa por ela, soma e faz a media.
function somaItensEdivide(tabela){
    let soma =0
    for(let i=0; i< tabela.length; i++){
        soma += tabela[i]
        
    }
    return soma/tabela.length
}
