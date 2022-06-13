/// pra funcionar precisa rodar no terminal e não no output, da erro.
// vamos ver como executar a mesma coisa do index.js porém usando os metodos antigos async e await
import chalk from 'chalk';
import fs from 'fs'; // biblioteca para ler arquivos em js.
const caminho = './arquivo/texto1.md' // caminho do arquivo.

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm; //
    const arrayResult = [];
   
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResult.push({[temp[1]]: temp[2]}) // chave do objeto precisa estar entre colchetes
    }
    return arrayResult.length === 0? 'nada de links' : arrayResult;
}





function trataErro(erro){
  // agora vamos inserir alguns dados dos parametros do objeto erro, o .code vai mostrar apenas o erro, e o segundo parametro, vai ser a mensagem a ser exibida
  throw new Error(chalk.red(erro.code, 'arquivo não encontrado.'));
}


async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)// pegando o texto
        return extraiLinks(texto) // se fosse sincrono era só deixar assim

    }catch(erro){
        trataErro(erro);
    }finally {
        console.log(chalk.yellow('operação concluída'));
    }


}

export {pegaArquivo, trataErro}
