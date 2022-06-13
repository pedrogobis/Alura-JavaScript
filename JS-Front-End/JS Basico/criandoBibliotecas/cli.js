import chalk from 'chalk';
import { pegaArquivo, trataErro } from "./asynceAwait.js";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    try{const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    console.log(chalk.yellow('lista de links'), resultado)
    }
    catch(erro){
        return trataErro(erro)
    }
}

console.log(pegaArquivo(caminho[2]))