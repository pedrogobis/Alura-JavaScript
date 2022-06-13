import chalk from 'chalk';
import { pegarArquivo } from "./exemploDaAula.js"


const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    try{const resultado = await pegarArquivo(caminhoDoArquivo[2]);
    console.log(chalk.yellow('lista de links'), resultado)
    }
    catch(erro){
        return trataErro(erro)
    }
}

console.log(pegarArquivo(caminho[2]))