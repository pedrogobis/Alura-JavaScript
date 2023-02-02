const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomesEnota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);
        const media = listaDeAlunosEMedias[1][indice];
        
        console.log(`${aluno} está cadastrado, ${media}`);

    }else{
        console.log('aluno sumiu')
    }
}

exibeNomesEnota('Ana')