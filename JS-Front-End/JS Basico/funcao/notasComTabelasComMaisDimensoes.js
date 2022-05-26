let alunos = ['henrique', 'pedro', 'ana', 'maria']
let mediasDosAlunos = [[10, 6.5, 8], [8.5, 10, 7], [9, 10, 9], [6, 8, 7.3]]
let salasDosAlunos = ['A', 'B', 'C', 'D']
//let media = 0;

let listaDeNotasEAlunos = [alunos, mediasDosAlunos, salasDosAlunos]

for(let i= 0; i < listaDeNotasEAlunos[1].length; i++){
    
    listaDeNotasEAlunos[1][i] = somaItensEdivide(listaDeNotasEAlunos[1][i])
    
    /*
    for(let j= 0; j <listaDeNotasEAlunos[1][i][j]; j++ ){
        console.log(listaDeNotasEAlunos[j])
        // media += listaDeNotasEAlunos[1][i][j]
    }
    */
}

for(let i = 0; i<listaDeNotasEAlunos[1].length; i++){
    console.log(`O aluno ${listaDeNotasEAlunos[0][i]}, da sala ${listaDeNotasEAlunos[2][i]}, teve a media de ${listaDeNotasEAlunos[1][i].toFixed(1)}`)
}

//console.log(listaDeNotasEAlunos.length)

function somaItensEdivide(tabela){
    let soma =0
    for(let i=0; i< tabela.length; i++){
        soma += tabela[i]
        
    }
    return soma/tabela.length
}
