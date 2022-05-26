let alunos = ['henrique', 'pedro', 'ana', 'maria']
let mediasDosAlunos = [10, 8.5, 9, 6]
//let salasDosAlunos = ['A', 'B', 'C', 'D']
let alunosEMedias = [alunos, mediasDosAlunos];


// arrow function
const exibeNomeDoAluno = (nomeDoAluno) =>{
    if(alunosEMedias[0].includes(nomeDoAluno)){
        indice = alunosEMedias[0].indexOf(nomeDoAluno)
        return alunosEMedias[0][indice] + ' sua media é ' + alunosEMedias[1][indice]
    } return 'aluno não está cadastrado'
}

//console.log(exibeNomeDoAluno('ana'))



    
// FIZ COM AS CHAMANDO AS FUNÇOES DE FORA.
const exibeNomeDoAluno2 = (tabela, nomeAluno) =>{
    return ` O ALUNO ${verificaAluno(tabela, nomeAluno)} TEVE A MEDIA ${mediasDosAlunosverifica(tabela,nomeAluno)} `
    

}

function verificaAluno(tabela, nomeAluno){
    if(tabela[0].includes(nomeAluno)){
        indice = tabela[0].indexOf(nomeAluno)
        return tabela[0][indice]
    } return `aluno nao encontrado`
}

function mediasDosAlunosverifica(tabela,nomeAluno){
    if(tabela[0].includes(nomeAluno)){
    indice = tabela[0].indexOf(nomeAluno)
    return tabela[1][indice]
    } return ''
} 


console.log(exibeNomeDoAluno2(alunosEMedias,'marcelo'))
